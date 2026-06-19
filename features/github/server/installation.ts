import type { GithubInstallationStatus } from "@/features/dashboard/lib/types";
import { getGithubApp } from "@/features/github/utils/github-app";
import { prisma } from "@/lib/db";


function getAccountLogin(
    account: { login?: string; slug?: string } | null | undefined
): string | null {
    if (!account) {
        return null;
    }

    if ("login" in account && account.login) {
        return account.login;
    }

    if (account.slug) {
        return account.slug;
    }

    return null;
}
function buildDisconnectedStatus(): GithubInstallationStatus {
    return { connected: false, accountLogin: null, installedAt: null };
}


export async function getInstallationStatus(userId: string) {
    const installation = await prisma.githubInstallation.findUnique({
        where: {
            userId
        }
    });

    if (!installation) {
        return buildDisconnectedStatus()
    }

    return {
        connected: true,
        accountLogin: installation.accountLogin,
        installedAt: installation.createdAt.toISOString()
    }
}


export async function saveInstallation(userId: string, installationId: number) {
    const app = getGithubApp();

    const { data } = await app.octokit.request(
        "GET /app/installations/{installation_id}",
        { installation_id: installationId }
    )

    const accountLogin = getAccountLogin(data.account);

    await prisma.githubInstallation.upsert({
        where: { userId },
        create: {
            userId,
            installationId,
            accountLogin,
            accountType: data.target_type ?? null,
        },
        update: {
            installationId,
            accountLogin,
            accountType: data.target_type ?? null,
        }
    })
}


function isHttpStatusError(error: unknown, statusCode: number): boolean {
    return (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        (error as { status?: unknown }).status === statusCode
    );
}


export async function deleteInstallation(userId: string) {
    const installationId = await getUserInstallationId(userId);

    if (installationId !== null) {
        const app = getGithubApp();

        try {
            await app.octokit.request("DELETE /app/installations/{installation_id}", {
                installation_id: installationId,
            });
        } catch (error) {
            if (!isHttpStatusError(error, 404)) {
                throw error;
            }
        }
    }

    await prisma.githubInstallation.delete({ where: { userId } });
}

export async function getUserIdByInstallationId(installationId: number) {
    const installation = await prisma.githubInstallation.findFirst({
        where: { installationId },
        select: { userId: true },
    });

    if (!installation) {
        return null;
    }

    return installation.userId;
}

export async function getUserInstallationId(userId: string) {
    const installation = await prisma.githubInstallation.findUnique({
        where: { userId },
        select: { installationId: true },
    });

    if (!installation) {
        return null;
    }

    return installation.installationId;
}
