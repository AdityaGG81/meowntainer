"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  FlashIcon,
  BrainIcon,
  ShieldKeyIcon,
  Wrench01Icon,
  GitPullRequestIcon,
  Message01Icon,
  CheckIcon,
  Alert01Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"

// ---------------------------------------------------------------------------
// Inline UI mockups — each one is self-contained
// ---------------------------------------------------------------------------

function ReviewSpeedMockup() {
  return (
    <div className="w-full mt-4 space-y-2.5">
      {[
        { name: "PR #342 — refactor/auth", time: "3.1s", bar: 8 },
        { name: "PR #341 — feat/payments", time: "4.8s", bar: 12 },
        { name: "PR #340 — fix/null-check", time: "2.4s", bar: 6 },
        { name: "PR #339 — chore/deps", time: "1.9s", bar: 5 },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-muted-foreground font-mono truncate">{item.name}</span>
              <span className="text-[11px] font-semibold text-neon-orange ml-2 shrink-0">{item.time}</span>
            </div>
            <div className="h-1 rounded-full bg-border/60 overflow-hidden">
              <div
                className="h-full rounded-full bg-neon-orange/70"
                style={{ width: `${item.bar * 8}%` }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-muted-foreground">avg. review time</span>
        <span className="text-[13px] font-bold text-foreground">3.05s</span>
      </div>
    </div>
  )
}

function ContextAwarenessMockup() {
  return (
    <div className="w-full mt-4 rounded-xl overflow-hidden border border-border/50 font-mono text-[11px]">
      {/* file header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-secondary/60 border-b border-border/50">
        <div className="flex gap-1">
          <span className="size-2.5 rounded-full bg-red-500/70" />
          <span className="size-2.5 rounded-full bg-yellow-500/70" />
          <span className="size-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-muted-foreground">src/auth/middleware.ts</span>
        <Badge variant="secondary" className="ml-auto text-[9px] px-1.5 py-0 h-4 font-mono">changed</Badge>
      </div>
      {/* diff lines */}
      <div className="bg-card/50 divide-y divide-border/30">
        {[
          { type: "ctx",  line: "export async function authMiddleware(req) {" },
          { type: "ctx",  line: "  const token = req.headers.get('authorization')" },
          { type: "del",  line: "  if (!token) return new Response('Unauthorized')" },
          { type: "add",  line: "  if (!token) return unauthorized(req)" },
          { type: "ctx",  line: "  const user = await verifyJWT(token)" },
        ].map((row, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-3 py-1 ${
              row.type === "add"
                ? "bg-green-500/8 text-green-400"
                : row.type === "del"
                ? "bg-red-500/8 text-red-400 line-through opacity-60"
                : "text-muted-foreground"
            }`}
          >
            <span className="w-3 shrink-0 text-[10px]">
              {row.type === "add" ? "+" : row.type === "del" ? "-" : ""}
            </span>
            <span>{row.line}</span>
          </div>
        ))}
      </div>
      {/* AI comment */}
      <div className="px-3 py-2.5 bg-primary/8 border-t border-primary/20 flex gap-2">
        <span className="text-primary text-base leading-none mt-0.5">🐱</span>
        <p className="text-[11px] text-foreground/80 leading-relaxed">
          <span className="text-primary font-semibold">Meowntainer</span> — Good catch, but{" "}
          <code className="text-accent">unauthorized()</code> is only defined in{" "}
          <code className="text-accent">utils/http.ts</code>. Make sure it&apos;s exported.
        </p>
      </div>
    </div>
  )
}

function SecurityMockup() {
  const vulns = [
    {
      severity: "CRIT",
      label: "Hardcoded AWS key in config.ts",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/25",
      dot: "bg-red-400",
    },
    {
      severity: "HIGH",
      label: "SQL injection via raw query",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/25",
      dot: "bg-orange-400",
    },
    {
      severity: "MED",
      label: "XSS in user comment renderer",
      color: "text-yellow-400",
      bg: "bg-yellow-500/8",
      border: "border-yellow-500/20",
      dot: "bg-yellow-400",
    },
    {
      severity: "LOW",
      label: "Deprecated crypto.createCipher",
      color: "text-blue-400",
      bg: "bg-blue-500/8",
      border: "border-blue-500/20",
      dot: "bg-blue-300",
    },
  ]
  return (
    <div className="w-full mt-4 space-y-2">
      {vulns.map((v, i) => (
        <div key={i} className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${v.bg} ${v.border}`}>
          <span className={`size-1.5 rounded-full shrink-0 ${v.dot}`} />
          <span className="flex-1 text-[11px] text-foreground/80 font-mono truncate">{v.label}</span>
          <span className={`text-[10px] font-bold shrink-0 ${v.color}`}>{v.severity}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-1">
        <HugeiconsIcon icon={Alert01Icon} className="size-3 text-muted-foreground" strokeWidth={1.5} />
        <span className="text-[11px] text-muted-foreground">4 issues found across 3 files</span>
        <span className="ml-auto text-[11px] text-green-400 font-medium flex items-center gap-1">
          <HugeiconsIcon icon={CheckIcon} className="size-3" strokeWidth={1.5} /> 0 in prod
        </span>
      </div>
    </div>
  )
}

function ZeroConfigMockup() {
  const steps = [
    { done: true,  text: "GitHub App installed" },
    { done: true,  text: "Repo permissions granted" },
    { done: true,  text: "Webhook connected" },
    { done: false, text: "Watching for pull requests…", pulse: true },
  ]
  return (
    <div className="w-full mt-4 space-y-2.5">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <span
            className={`size-5 rounded-full flex items-center justify-center shrink-0 ${
              s.done ? "bg-green-500/20 border border-green-500/40" : "bg-primary/15 border border-primary/30"
            }`}
          >
            {s.done ? (
              <HugeiconsIcon icon={CheckIcon} className="size-3 text-green-400" strokeWidth={1.5} />
            ) : (
              <span className={`size-1.5 rounded-full bg-primary ${s.pulse ? "animate-pulse" : ""}`} />
            )}
          </span>
          <span className={`text-[12px] font-mono ${s.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
            {s.text}
          </span>
        </div>
      ))}
      <div className="mt-3 rounded-lg border border-green-500/20 bg-green-500/8 px-3 py-2 flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
        <span className="text-[11px] text-green-400 font-mono">Ready. No config needed.</span>
      </div>
    </div>
  )
}

function SummaryMockup() {
  return (
    <div className="w-full mt-4 rounded-xl border border-border/50 overflow-hidden">
      <div className="px-3 py-2 bg-secondary/50 border-b border-border/40 flex items-center gap-2">
        <HugeiconsIcon icon={GitPullRequestIcon} className="size-3.5 text-primary" strokeWidth={1.5} />
        <span className="text-[11px] font-medium text-foreground">PR #342 — refactor/auth-flow</span>
        <Badge variant="secondary" className="ml-auto text-[9px] font-mono px-1.5 py-0 h-4">+182 −96</Badge>
      </div>
      <div className="p-3 space-y-2 bg-card/50">
        <div className="flex items-start gap-2">
          <HugeiconsIcon icon={InformationCircleIcon} className="size-3 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Summary:</span> Replaces JWT decode logic with a shared{" "}
            <code className="text-accent">useAuth</code> hook across 6 files. Reduces duplication by ~40%.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <HugeiconsIcon icon={Message01Icon} className="size-3 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Suggestion:</span>{" "}
            <code className="text-accent">useAuth</code> is not memoized — consider wrapping the hook return in{" "}
            <code className="text-accent">useMemo</code> to avoid re-renders.
          </p>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Feature card definitions
// ---------------------------------------------------------------------------

const featuresRow1 = [
  {
    icon: BrainIcon,
    tag: "Context",
    title: "Reads your whole codebase",
    description: "Not just the diff. Meowntainer cross-references imports, types, and usages to give advice that actually makes sense.",
    accent: "text-primary",
    glow: "border-primary/20 hover:border-primary/40",
    iconBg: "bg-primary/12",
    Mockup: ContextAwarenessMockup,
  },
  {
    icon: ShieldKeyIcon,
    tag: "Security",
    title: "Catches vulns before merge",
    description: "Hardcoded secrets, injections, deprecated APIs — flagged automatically on every PR.",
    accent: "text-accent",
    glow: "border-accent/20 hover:border-accent/40",
    iconBg: "bg-accent/12",
    Mockup: SecurityMockup,
  },
]

const featuresRow2 = [
  {
    icon: FlashIcon,
    tag: "Speed",
    title: "Reviews in under 5 seconds",
    description: "Meowntainer analyzes your diff and posts feedback before your CI even starts. No queue, no waiting.",
    accent: "text-neon-orange",
    glow: "border-neon-orange/20 hover:border-neon-orange/40",
    iconBg: "bg-neon-orange/12",
    Mockup: ReviewSpeedMockup,
  },
  {
    icon: Message01Icon,
    tag: "Summaries",
    title: "Plain-English PR summaries",
    description: "Every PR gets a one-paragraph summary so reviewers know what changed before reading a single line.",
    accent: "text-primary",
    glow: "border-primary/15 hover:border-primary/35",
    iconBg: "bg-primary/10",
    Mockup: SummaryMockup,
  },
  {
    icon: Wrench01Icon,
    tag: "Setup",
    title: "Zero configuration",
    description: "Install the GitHub App, grant repo access, and you're done. No YAML, no tokens, no pipelines.",
    accent: "text-neon-orange",
    glow: "border-neon-orange/15 hover:border-neon-orange/35",
    iconBg: "bg-neon-orange/10",
    Mockup: ZeroConfigMockup,
  },
]

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function FeaturesSection() {
  return (
    <section id="features" className="py-28 relative">
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Features</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance leading-tight">
            Your AI-powered senior dev.
            <br />
            <span className="text-muted-foreground font-medium">Who happens to be a cat.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            From instant feedback to deep security scans, Meowntainer covers the whole review cycle — automatically.
          </p>
        </motion.div>

        {/* bento grid — row 1: 2×col-span-3 | row 2: 3×col-span-2 */}
        <motion.div 
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Row 1 — two equal wide cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {featuresRow1.map((f) => {
              return (
                <motion.div
                  variants={itemVariants}
                  key={f.title}
                  className={`glass rounded-2xl border p-5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group ${f.glow}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`size-9 rounded-xl ${f.iconBg} flex items-center justify-center shrink-0`}>
                      <HugeiconsIcon icon={f.icon} className={`size-4.5 ${f.accent}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className={`text-[10px] font-semibold uppercase tracking-widest mb-0.5 ${f.accent}`}>{f.tag}</p>
                      <h3 className="font-bold text-foreground text-sm leading-snug">{f.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  <f.Mockup />
                </motion.div>
              )
            })}
          </div>

          {/* Row 2 — three equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuresRow2.map((f) => {
              return (
                <motion.div
                  variants={itemVariants}
                  key={f.title}
                  className={`glass rounded-2xl border p-5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group ${f.glow}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`size-9 rounded-xl ${f.iconBg} flex items-center justify-center shrink-0`}>
                      <HugeiconsIcon icon={f.icon} className={`size-4.5 ${f.accent}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className={`text-[10px] font-semibold uppercase tracking-widest mb-0.5 ${f.accent}`}>{f.tag}</p>
                      <h3 className="font-bold text-foreground text-sm leading-snug">{f.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  <f.Mockup />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
