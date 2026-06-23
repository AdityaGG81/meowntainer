"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckIcon, GitBranchIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const plans = [
  {
    id: "free",
    emoji: "🐱",
    name: "Free",
    label: "Community",
    price: "$0",
    period: "/mo",
    tagline: "For open-source projects and small personal repos.",
    featured: false,
    cta: "Get Started for Free",
    ctaVariant: "outline" as const,
    features: [
      "Up to 3 repositories",
      "50 PR reviews / month",
      "Basic bug detection",
      "Style & lint suggestions",
      "GitHub comments",
      "Community support",
    ],
  },
  {
    id: "pro",
    emoji: "🦁",
    name: "Pro",
    label: "Premium",
    price: "$15",
    period: "/mo",
    tagline: "For professional developers and fast-moving startups.",
    featured: true,
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    features: [
      "Unlimited repositories",
      "Unlimited PR reviews",
      "Advanced security scanning",
      "Priority review queue",
      "Full codebase context",
      "Slack & email notifications",
      "Team analytics dashboard",
      "Custom rule sets",
      "Priority support",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
            Simple pricing.
            <br />
            <span className="text-muted-foreground">No surprises.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-md mx-auto">
            Start free forever on open-source. Upgrade when you&apos;re ready to ship faster.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan) => (
            <motion.div
              variants={itemVariants}
              key={plan.id}
              className={cn(
                "relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl glass",
                plan.featured
                  ? "border border-primary/40 hover:border-primary hover:shadow-primary/20 glow-purple"
                  : "border border-border/50 hover:border-border hover:shadow-black/50"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground border-0 px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Plan header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{plan.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-foreground text-lg">{plan.name}</h3>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs font-semibold",
                          plan.featured
                            ? "bg-primary/15 text-primary border-primary/20"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        {plan.label}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-foreground tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-base mb-2">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.tagline}</p>
              </div>

              {/* CTA */}
              <div className="mt-8 mb-6">
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ variant: plan.ctaVariant, size: "lg" }),
                    "w-full font-bold text-sm",
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-purple"
                      : "border-border/60 bg-secondary/50 hover:bg-secondary"
                  )}
                >
                  <HugeiconsIcon icon={GitBranchIcon} className="size-4 mr-2" strokeWidth={1.5} />
                  {plan.cta}
                </Link>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <HugeiconsIcon
                      icon={CheckIcon}
                      className={cn(
                        "size-4 mt-0.5 shrink-0",
                        plan.featured ? "text-primary" : "text-accent"
                      )}
                      strokeWidth={1.5}
                    />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          All plans include a 14-day trial of Pro features. No credit card required.
        </p>
      </div>
    </section>
  )
}
