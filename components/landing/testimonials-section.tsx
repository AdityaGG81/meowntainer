"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon, QuoteUpIcon } from "@hugeicons/core-free-icons"

const testimonials = [
  {
    quote:
      "We merged a SQL injection vulnerability into staging last quarter. Since adding Meowntainer, it would have been flagged before the PR was even reviewed by a human.",
    name: "Priya Kapoor",
    role: "Staff Engineer",
    company: "Finflow",
    initials: "PK",
    accent: "bg-primary/20 text-primary",
  },
  {
    quote:
      "Our junior devs are shipping with way more confidence now. Having an AI review waiting within seconds of opening a PR means they catch their own mistakes before asking for help.",
    name: "Marcus Webb",
    role: "Engineering Manager",
    company: "Loopcast",
    initials: "MW",
    accent: "bg-accent/20 text-accent",
  },
  {
    quote:
      "The context-awareness is what sold me. It didn't just see that I removed a function — it noticed three other files still imported it and flagged them all.",
    name: "Sophie Tran",
    role: "Senior Frontend Dev",
    company: "Stellarbit",
    initials: "ST",
    accent: "bg-neon-orange/20 text-neon-orange",
  },
  {
    quote:
      "Cut our average time-to-review by about 60%. Human reviewers are now spending time on architecture decisions, not nitpicking missing null checks.",
    name: "Dante Cruz",
    role: "CTO",
    company: "Patchwork",
    initials: "DC",
    accent: "bg-primary/20 text-primary",
  },
  {
    quote:
      "Setup took two minutes. We installed it on a Friday afternoon and had it reviewing PRs before the weekend. Genuinely the fastest tool onboarding I've experienced.",
    name: "Aiko Sato",
    role: "DevOps Lead",
    company: "Gridline",
    initials: "AS",
    accent: "bg-accent/20 text-accent",
  },
  {
    quote:
      "The summaries alone are worth it. Every PR now has a plain-English description at the top. Our product team actually understands what's shipping without reading diffs.",
    name: "Ben Okafor",
    role: "Tech Lead",
    company: "Velora",
    initials: "BO",
    accent: "bg-neon-orange/20 text-neon-orange",
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <HugeiconsIcon key={i} icon={StarIcon} className="size-3.5 text-neon-orange" strokeWidth={0} style={{ fill: "currentColor" }} />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const col1 = testimonials.slice(0, 2)
  const col2 = testimonials.slice(2, 4)
  const col3 = testimonials.slice(4, 6)

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Loved by Developers</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance leading-tight">
            Teams shipping faster.
            <br />
            <span className="text-muted-foreground font-medium">Bugs catching fewer.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            Over 3,000 engineers use Meowntainer to review code across 1,200+ repositories every day.
          </p>
        </div>

        {/* stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { value: "3,200+", label: "Active developers" },
            { value: "1.2M+", label: "PRs reviewed" },
            { value: "4.2s",  label: "Avg. review time" },
            { value: "94%",   label: "Bugs caught pre-merge" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl border border-border/50 p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* masonry grid — 3 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((t) => (
                <div
                  key={t.name}
                  className="glass rounded-2xl border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 p-6 flex flex-col gap-4"
                >
                  {/* quote icon + stars */}
                  <div className="flex items-center justify-between">
                    <HugeiconsIcon icon={QuoteUpIcon} className="size-6 text-primary/40" strokeWidth={1.5} />
                    <StarRating />
                  </div>

                  {/* quote text */}
                  <p className="text-sm text-foreground/80 leading-relaxed flex-1">{t.quote}</p>

                  {/* author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                    <div className={`size-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.accent}`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
