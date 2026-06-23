"use client"

import { useState, useEffect } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, Cancel01Icon, GitBranchIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="size-10 rounded-lg overflow-hidden shrink-0">
            <Image
              src="/logo2.svg"
              alt="Meowntainer logo"
              width={40}
              height={40}
              className="size-10 object-cover"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Meow<span className="text-primary">ntainer</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/sign-in" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-muted-foreground hover:text-foreground")}>
            Sign In
          </Link>
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-primary text-primary-foreground hover:bg-primary/90 glow-purple font-semibold"
            )}
          >
            <HugeiconsIcon icon={GitBranchIcon} className="size-4 mr-1.5" />
            Install Free
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HugeiconsIcon icon={Cancel01Icon} className="size-5" /> : <HugeiconsIcon icon={Menu01Icon} className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/60 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/sign-in"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-secondary"
            onClick={() => setMobileOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ size: "sm" }),
              "mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            )}
            onClick={() => setMobileOpen(false)}
          >
            <HugeiconsIcon icon={GitBranchIcon} className="size-4 mr-1.5" />
            Install on GitHub for Free
          </Link>
        </div>
      )}
    </header>
  )
}
