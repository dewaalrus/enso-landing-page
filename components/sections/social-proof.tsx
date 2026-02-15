import { FadeIn } from '@/components/motion/fade-in'

const partners = [
  'Series B SaaS',
  'Enterprise Sales',
  'Growth-Stage Startup',
  'Revenue Team',
]

export function SocialProof() {
  return (
    <div className="py-10 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground mb-5">
              Building with teams from
            </p>
            <div className="flex items-center justify-center gap-10 lg:gap-14 flex-wrap">
              {partners.map((name) => (
                <span
                  key={name}
                  className="text-sm font-semibold text-muted-foreground/40 tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
