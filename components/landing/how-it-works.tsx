"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  GitBranchIcon,
  GitPullRequestIcon,
  Message01Icon,
  CheckIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    step: "01",
    icon: GitBranchIcon,
    title: "Install the GitHub App",
    description:
      "Click install, choose your repositories, and grant access. No config files, no tokens, no pipelines to set up. Done in under 2 minutes.",
    color: "text-primary",
    iconBg: "bg-primary/15 border-primary/25",
    glowColor: "bg-primary/20",
    accentLine: "from-primary/60 to-primary/10",
    detail: "2-minute setup",
    detailColor: "bg-primary/15 text-primary border-primary/25",
    mockup: (
      <div className="mt-5 rounded-xl border border-border/50 overflow-hidden font-mono text-[11px]">
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary/60 border-b border-border/40">
          <div className="flex gap-1">
            <span className="size-2 rounded-full bg-red-400/60" />
            <span className="size-2 rounded-full bg-yellow-400/60" />
            <span className="size-2 rounded-full bg-green-400/60" />
          </div>
          <span className="text-muted-foreground text-[11px]">GitHub App installation</span>
        </div>
        <div className="bg-card/60 p-3 space-y-2">
          {[
            { icon: CheckIcon, text: "App installed", done: true },
            { icon: CheckIcon, text: "Repo access granted", done: true },
            { icon: CheckIcon, text: "Webhook active", done: true },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="size-4 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0">
                <HugeiconsIcon icon={row.icon} className="size-2.5 text-green-400" strokeWidth={2} />
              </span>
              <span className="text-muted-foreground line-through">{row.text}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1">
            <span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-primary">Watching for pull requests…</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    icon: GitPullRequestIcon,
    title: "Open a Pull Request",
    description:
      "Work exactly as you always have. Push your branch and open a PR on GitHub. Meowntainer is already watching and springs into action the moment it appears.",
    color: "text-accent",
    iconBg: "bg-accent/15 border-accent/25",
    glowColor: "bg-accent/20",
    accentLine: "from-accent/60 to-accent/10",
    detail: "No workflow changes",
    detailColor: "bg-accent/15 text-accent border-accent/25",
    mockup: (
      <div className="mt-5 rounded-xl border border-border/50 overflow-hidden text-[11px]">
        <div className="px-3 py-2.5 bg-secondary/60 border-b border-border/40 flex items-center gap-2">
          <span className="size-2 rounded-full bg-green-400" />
          <span className="font-mono text-foreground font-medium">feat/add-payment-webhooks</span>
          <Badge variant="secondary" className="ml-auto text-[9px] px-1.5 py-0 h-4">Open</Badge>
        </div>
        <div className="bg-card/60 px-3 py-2.5 flex items-center gap-2 border-b border-border/30">
          <span className="text-muted-foreground font-mono">+247</span>
          <span className="mx-1 text-border">·</span>
          <span className="text-muted-foreground font-mono">−83</span>
          <span className="mx-1 text-border">·</span>
          <span className="text-muted-foreground">6 files</span>
          <span className="ml-auto flex items-center gap-1.5 text-accent text-[11px]">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Meowntainer analyzing…
          </span>
        </div>
        <div className="bg-card/40 px-3 py-2 text-muted-foreground font-mono">
          <span className="text-accent">●</span> CI / lint <span className="ml-2 text-yellow-400">pending</span>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    icon: Message01Icon,
    title: "Get Your AI Review",
    description:
      "Within seconds, Meowntainer analyzes the full diff, understands context across your whole codebase, and leaves a detailed inline review — bugs, suggestions, and security flags included.",
    color: "text-neon-orange",
    iconBg: "bg-neon-orange/15 border-neon-orange/25",
    glowColor: "bg-neon-orange/20",
    accentLine: "from-neon-orange/60 to-neon-orange/10",
    detail: "~4s avg. review time",
    detailColor: "bg-neon-orange/15 text-neon-orange border-neon-orange/25",
    mockup: (
      <div className="mt-5 rounded-xl border border-border/50 overflow-hidden text-[11px]">
        <div className="bg-primary/8 border-b border-primary/20 px-3 py-2 flex items-center gap-2">
          <span className="text-primary text-base leading-none">🐱</span>
          <span className="font-semibold text-primary">Meowntainer</span>
          <Badge variant="secondary" className="ml-auto text-[9px] px-1.5 py-0 h-4 font-mono">3.8s</Badge>
        </div>
        <div className="bg-card/60 p-3 space-y-2.5">
          <div className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
            <p className="text-foreground/80 leading-relaxed">
              <span className="font-semibold text-red-400">Bug:</span>{" "}
              <code className="text-accent">webhookSecret</code> is never validated — attacker can forge events.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
            <p className="text-foreground/80 leading-relaxed">
              <span className="font-semibold text-yellow-400">Suggestion:</span>{" "}
              Consider extracting the retry logic into a shared <code className="text-accent">withRetry()</code> utility.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
            <p className="text-muted-foreground leading-relaxed">Payment handler pattern looks solid.</p>
          </div>
        </div>
      </div>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance leading-tight">
            From zero to reviewed
            <br />
            <span className="text-muted-foreground font-medium">in three steps.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            No new tooling. No config files. Just install, push, and get a review.
          </p>
        </div>

        {/* step cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.step} className="relative group flex flex-col">
              {/* connector arrow between cards (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3.5 top-10 z-10 items-center justify-center size-7 rounded-full bg-secondary border border-border">
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5 text-muted-foreground" strokeWidth={1.5} />
                </div>
              )}

              <div className="glass rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 p-6 flex flex-col h-full">
                {/* step header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative shrink-0">
                    <div className={`absolute inset-0 rounded-2xl ${step.glowColor} blur-xl scale-150 opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className={`relative size-14 rounded-2xl border ${step.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <HugeiconsIcon icon={step.icon} className={`size-6 ${step.color}`} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-1.5 -left-1.5 size-5 rounded-full bg-secondary border border-border text-[9px] font-bold text-muted-foreground flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline" className={`text-[10px] px-2 py-0 h-5 mb-1.5 font-semibold border ${step.detailColor}`}>
                      {step.detail}
                    </Badge>
                    <h3 className="font-bold text-foreground text-base leading-snug">{step.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                {/* in-card UI mockup */}
                {step.mockup}
              </div>
            </div>
          ))}
        </div>

        {/* bottom nudge */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground text-sm">
            That&apos;s it. No YAML. No config. No PhD required.
            <span className="text-primary ml-2 font-semibold">Just better code.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
