"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteUpIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    q: "What languages and frameworks does Meowntainer support?",
    a: "Meowntainer understands every language GitHub can parse — TypeScript, JavaScript, Python, Go, Rust, Java, Ruby, C#, PHP, Swift, Kotlin, and more. It also understands framework-level conventions for React, Next.js, Django, Rails, and others, so suggestions are idiomatic rather than generic.",
  },
  {
    q: "Does Meowntainer read my entire codebase, or just the diff?",
    a: "Both. It analyzes the full diff for line-by-line feedback, but it also indexes your repository so it can cross-reference imports, type definitions, and usage patterns across files that weren't changed. This is what lets it catch broken imports and misused APIs rather than just style issues.",
  },
  {
    q: "How does Meowntainer handle private and sensitive code?",
    a: "Your code is never stored persistently. Each review runs in an isolated, ephemeral environment — the context is used for the review and then discarded. We hold SOC 2 Type II certification and are fully GDPR compliant. Enterprise plans support BYOK (bring your own key) for end-to-end encryption.",
  },
  {
    q: "Can I configure what Meowntainer focuses on?",
    a: "Yes. You can configure review focus areas per-repository via a .meowntainer.yml file in your repo root — or from the dashboard without touching config files at all. You can prioritize security, performance, style, test coverage, or documentation, and you can set severity thresholds for when to block a merge.",
  },
  {
    q: "Does it integrate with my existing CI/CD pipeline?",
    a: "Meowntainer runs independently of CI — it doesn't need to be part of your pipeline, and it doesn't block your builds. It posts comments directly on your PRs via the GitHub API. You can optionally configure it to post a status check that blocks merge on high-severity findings.",
  },
  {
    q: "What's the difference between the Kitten and Lion plans?",
    a: "The Kitten plan is free forever for up to 5 developers and covers public and private repos with standard review depth. The Lion plan adds deep security scanning, organization-wide analytics, custom review rules, priority support, and removes all usage limits. Teams on Lion also get early access to new models and features.",
  },
  {
    q: "Can I use Meowntainer on GitHub Enterprise Server?",
    a: "Yes. Enterprise plans include a self-hosted deployment option that runs inside your own infrastructure, connects to your GitHub Enterprise Server instance, and never sends code outside your network. Contact us for setup details.",
  },
  {
    q: "How do I cancel or change my plan?",
    a: "You can change or cancel your plan at any time from the billing section of your dashboard — no sales calls, no lock-in. Downgrades take effect at the end of your current billing period, and you keep access to paid features until then.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/4 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left column — heading + CTA */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-balance leading-tight mb-5">
              Questions worth
              <br />
              <span className="text-muted-foreground font-medium">asking up front.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              If you don&apos;t see your question here, our team is reachable via the in-app chat or at{" "}
              <span className="text-primary">support@meowntainer.dev</span>.
            </p>

            {/* decorative quote card */}
            <div className="glass rounded-2xl border border-primary/20 p-5">
              <HugeiconsIcon icon={QuoteUpIcon} className="size-6 text-primary/50 mb-3" strokeWidth={1.5} />
              <p className="text-sm text-foreground/80 leading-relaxed italic mb-4">
                &ldquo;I had three security questions before buying. Support answered all of them within 10 minutes — in a GitHub issue.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="size-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                  LM
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Lena Müller</div>
                  <div className="text-[11px] text-muted-foreground">Security Engineer · Arkive</div>
                </div>
              </div>
            </div>

            <Button className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 mr-2" strokeWidth={1.5} />
              Get started free
            </Button>
          </div>

          {/* Right column — accordion */}
          <div>
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  className="glass rounded-xl border border-border/50 px-5 data-[open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline **:data-[slot=accordion-trigger-icon]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  )
}
