'use client'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { EnsoIcon } from '@/components/enso-icon'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--background)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-foreground">
          <EnsoIcon size={24} />
          <span className="font-serif text-lg tracking-tight">enso</span>
        </a>

        {/* Section links + CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button asChild size="sm">
            <a href="#design-partner">Request Early Access</a>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
