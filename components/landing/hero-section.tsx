"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { GitBranchIcon, ArrowRight01Icon, StarIcon } from "@hugeicons/core-free-icons"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.96 0.006 274) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0.006 274) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pill badge */}
        <motion.div variants={itemVariants}>
          <Badge
            variant="secondary"
            className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest border border-primary/30 bg-primary/10 text-primary"
          >
            <HugeiconsIcon icon={StarIcon} className="size-3 mr-1.5" />
            Now in Public Beta — Free Forever for OSS
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.08]">
            <span className="text-foreground">Purr-fect Code Reviews,</span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-orange bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient glow-text-purple inline-block pb-2">
              Every Single Time.
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.div variants={itemVariants} className="max-w-2xl">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Meet{" "}
            <strong className="text-foreground font-semibold">Meowntainer</strong>: The AI-powered GitHub App
            that automatically reviews your pull requests, catches bugs, and suggests improvements before you merge.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90 glow-purple font-bold text-base px-8 h-12 group"
            )}
          >
            <HugeiconsIcon icon={GitBranchIcon} className="size-5 mr-2" />
            Install on GitHub for Free
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-border/60 bg-secondary/50 hover:bg-secondary text-foreground font-semibold text-base px-8 h-12"
          >
            View Live Demo
          </Button>
        </motion.div>

        {/* Social proof micro-line */}
        <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            2-minute setup
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-1.5 rounded-full bg-neon-orange" />
            Zero config
          </span>
        </motion.div>

        {/* PR Mockup */}
        <motion.div variants={itemVariants} className="w-full max-w-3xl">
          <PRMockup />
        </motion.div>
      </motion.div>
    </section>
  )
}

function PRMockup() {
  return (
    <div className="relative">
      <div className="glass rounded-2xl border border-border/60 overflow-hidden shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
          <div className="size-3 rounded-full bg-destructive/70" />
          <div className="size-3 rounded-full bg-neon-orange/70" />
          <div className="size-3 rounded-full bg-accent/70" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            github.com / your-org / awesome-project / pull / 42
          </span>
        </div>

        {/* PR header */}
        <div className="px-6 py-4 border-b border-border/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                feat: add user authentication with JWT tokens
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-accent font-medium">@dev-jane</span> wants to merge{" "}
                <span className="font-mono text-primary">feat/auth</span> into{" "}
                <span className="font-mono text-muted-foreground">main</span>
              </p>
            </div>
            <Badge className="bg-green-500/15 text-green-400 border border-green-500/30 text-xs font-semibold shrink-0">
              Open
            </Badge>
          </div>
        </div>

        {/* Diff snippet */}
        <div className="px-6 py-3 border-b border-border/40 bg-background/40">
          <div className="font-mono text-xs space-y-0.5">
            <div className="text-muted-foreground/50">@@ -24,6 +24,14 @@ export async function login(req, res) {"{"}</div>
            <div className="text-red-400/80 bg-red-500/5 px-2 py-0.5 rounded">
              - const token = jwt.sign(payload, process.env.SECRET)
            </div>
            <div className="text-green-400/80 bg-green-500/5 px-2 py-0.5 rounded">
              + const token = jwt.sign(payload, process.env.JWT_SECRET, {"{"} expiresIn: {"'7d'"} {"}"})
            </div>
            <div className="text-green-400/80 bg-green-500/5 px-2 py-0.5 rounded">
              + if (!process.env.JWT_SECRET) throw new Error(&apos;JWT_SECRET not set&apos;)
            </div>
          </div>
        </div>

        {/* Meowntainer comment */}
        <div className="px-6 py-4">
          <div className="flex items-start gap-3">
            {/* Bot avatar */}
            <div className="size-8 rounded-full overflow-hidden border border-primary/40 shrink-0 glow-purple bg-background">
              <Image
                src="/logo2.svg"
                alt="Meowntainer bot"
                width={32}
                height={32}
                className="size-8 object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary">meowntainer</span>
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 font-medium">
                  bot
                </Badge>
                <span className="text-xs text-muted-foreground">just now</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 border-primary/20 text-left">
                <p className="text-xs text-foreground/90 leading-relaxed">
                  <span className="text-primary font-semibold">🔍 Security Finding (High):</span>{" "}
                  The original code signs tokens without an expiry. I&apos;ve flagged this — but your fix looks purrfect!
                  One more thing: move the{" "}
                  <code className="bg-secondary px-1 py-0.5 rounded text-accent font-mono">JWT_SECRET</code> check{" "}
                  <em>before</em> token generation to fail fast. Also, consider{" "}
                  <code className="bg-secondary px-1 py-0.5 rounded text-accent font-mono">httpOnly</code> cookies
                  over localStorage for extra security. 🐱
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">Confidence: </span>
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-[92%] rounded-full bg-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cat mascot */}
      <div className="absolute -right-8 -top-12 size-28 hidden lg:block">
        <Image
          src="/meowntainer-cat.png"
          alt="Meowntainer cat mascot"
          fill
          className="object-contain drop-shadow-xl"
        />
      </div>
    </div>
  )
}
