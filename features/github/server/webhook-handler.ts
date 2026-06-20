import { inngest } from "@/features/inngest/client";
import { savePullRequest } from "@/features/reviews/server/save-pull-request";
import { getGithubApp } from "../utils/github-app";
import type { PullRequestWebhookPayload } from "../types";
import { getUserIdByInstallationId } from "./installation";
import { canUserReview } from "@/features/billing/server/usage";
import { prisma } from "@/lib/db";

const REVIEWABLE_ACTIONS = ["opened", "synchronize", "reopened"];

async function isSignatureValid(payload: string, signature: string | null) {
  if (!signature) {
    return false;
  }

  const app = getGithubApp();
  // Octokit wraps GitHub's webhook crypto — rejects forged payloads.
  return app.webhooks.verify(payload, signature);
}

export async function handleGithubWebhook(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get("x-hub-signature-256");
  const eventName = request.headers.get("x-github-event");

  console.log("[github-webhook] received", { eventName });

  const isValid = await isSignatureValid(payload, signature);

  if (!isValid) {
    console.warn("[github-webhook] rejected invalid signature");
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  if (eventName !== "pull_request") {
    console.log("[github-webhook] ignored non-pull_request event", {
      eventName,
    });
    return Response.json({ received: true });
  }

  const event = JSON.parse(payload) as PullRequestWebhookPayload;

  console.log("[github-webhook] pull_request event", {
    action: event.action,
    installationId: event.installation.id,
    repository: event.repository.full_name,
    prNumber: event.pull_request.number,
  });

  if (!REVIEWABLE_ACTIONS.includes(event.action)) {
    console.log("[github-webhook] ignored unsupported pull_request action", {
      action: event.action,
    });
    return Response.json({ received: true });
  }

  const pullRequest = await savePullRequest(event);

  const userId = await getUserIdByInstallationId(event.installation.id);

  if (userId) {
    const allowed = await canUserReview(userId);
    if (!allowed) {
      await prisma.pullRequest.update({
        where: {
          id: pullRequest.id,
        },
        data: {
          status: "rate_limited",
        },
      });
      return Response.json({ received: true, rateLimited: true });
    }
  }

  try {
    const result = await inngest.send({
      name: "github/pr.received",
      data: { pullRequestId: pullRequest.id },
    });
  } catch (error) {
    console.error("[github-webhook] failed to send inngest event", {
      pullRequestId: pullRequest.id,
      error,
    });
    throw error;
  }

  return Response.json({ received: true });
}
