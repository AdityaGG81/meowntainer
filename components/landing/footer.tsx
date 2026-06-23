import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons"
import Image from "next/image"

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: brand + links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="size-8 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/logo2.svg"
                  alt="Meowntainer logo"
                  width={32}
                  height={32}
                  className="size-8 object-cover"
                />
              </div>
              <span className="text-base font-bold tracking-tight">
                Meow<span className="text-primary">ntainer</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The AI code reviewer that never sleeps, never gets grumpy, and always has an opinion about your variable names.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Button variant="outline" size="icon" className="size-9 border-border/60 bg-secondary/50 hover:bg-secondary">
                <HugeiconsIcon icon={GithubIcon} className="size-4" strokeWidth={1.5} />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon" className="size-9 border-border/60 bg-secondary/50 hover:bg-secondary">
                <HugeiconsIcon icon={NewTwitterIcon} className="size-4" strokeWidth={1.5} />
                <span className="sr-only">Twitter / X</span>
              </Button>
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/40 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            &copy; 2026 Meowntainer. Built with 🐾 and AI.
          </p>
          <p className="flex items-center gap-1">
            Purring at
            <span className="font-mono text-primary mx-1">99.9%</span>
            uptime
          </p>
        </div>
      </div>
    </footer>
  )
}
