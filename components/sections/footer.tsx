import { EnsoIcon } from '@/components/enso-icon'
import { FadeIn } from '@/components/motion/fade-in'

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <FadeIn direction="up">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-foreground">
            <EnsoIcon size={20} />
            <span className="font-serif text-base tracking-tight">enso</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Relationship intelligence that builds itself and survives change.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-muted-foreground/60">
            <a
              href="mailto:ethan@useenso.co"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <span className="w-px h-3 bg-border" />
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <span className="w-px h-3 bg-border" />
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Enso. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  )
}
