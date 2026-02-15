'use client'
import { EnsoIcon } from '@/components/enso-icon'
import { FadeIn } from '@/components/motion/fade-in'

export function ProductShowcase() {
  return (
    <div className="py-20 md:py-24 border-t border-border/50" id="product">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              The Product
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Calm tools for <span className="text-accent">complex work.</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Zero manual data entry. The graph builds intelligence from your
              daily workflow.
            </p>
          </div>
        </FadeIn>

        {/* Mockups */}
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-6 my-10">
          {/* Meeting Prep */}
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-lg shadow-accent/5 transition-shadow hover:shadow-xl">
              <div className="bg-background border-b border-border px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                </div>
                <div className="flex-1 text-center text-[11px] text-muted-foreground font-medium">
                  Meeting Prep
                </div>
              </div>
              <div className="p-5 space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-signal" />
                  <span className="font-serif text-[15px] font-medium">
                    Q1 Pipeline Review: Acme Corp
                  </span>
                </div>
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground">
                  Key Intelligence
                </p>
                <div className="bg-ai-accent-mist rounded-lg px-3.5 py-2.5">
                  <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-ai-accent mb-0.5">
                    Relationship Signal
                  </p>
                  <p className="text-xs text-foreground leading-snug">
                    Sarah Chen (VP Eng) mentioned budget concerns in last email.
                    Champion sentiment trending down.
                  </p>
                </div>
                <div className="bg-accent/5 rounded-lg px-3.5 py-2.5">
                  <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-accent mb-1">
                    Stakeholder Map
                  </p>
                  <div className="flex gap-2.5">
                    {[
                      { initials: 'SC', label: 'Champion', color: 'bg-accent' },
                      { initials: 'MJ', label: 'Decision Maker', color: 'bg-signal' },
                      { initials: 'RP', label: 'Blocker', color: 'bg-ai-accent' },
                    ].map((s) => (
                      <div key={s.initials} className="flex items-center gap-1">
                        <div className={`w-5 h-5 rounded-full ${s.color} text-white text-[8px] font-semibold flex items-center justify-center`}>
                          {s.initials}
                        </div>
                        <span className="text-[10px]">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-signal/5 rounded-lg px-3.5 py-2.5">
                  <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-signal mb-0.5">
                    Suggested Talking Points
                  </p>
                  <p className="text-xs text-foreground leading-snug">
                    Reference ROI data from pilot. Address timeline concerns
                    raised Dec 15.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 pt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-ai-accent flex items-center justify-center">
                    <EnsoIcon size={8} className="text-white" />
                  </div>
                  <span className="text-[10px] text-muted-foreground italic">
                    Generated from 14 emails, 3 meetings, and 2 call transcripts
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Account Intelligence */}
          <FadeIn delay={0.25}>
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-lg shadow-accent/5 transition-shadow hover:shadow-xl">
              <div className="bg-background border-b border-border px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                </div>
                <div className="flex-1 text-center text-[11px] text-muted-foreground font-medium">
                  Account Intelligence
                </div>
              </div>
              <div className="p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[15px] font-medium">Acme Corp</span>
                  <div className="flex items-center gap-1.5">
                    <span className="bg-signal/10 text-signal text-[10px] font-bold px-2 py-0.5 rounded">
                      HEALTHY
                    </span>
                    <span className="font-serif text-xl font-medium text-signal">78</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground mb-1.5">
                    RELATIONSHIP HEALTH
                  </p>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-signal to-ai-accent rounded-full" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground mb-2">
                    KEY CONTACTS
                  </p>
                  <div className="space-y-1.5">
                    {[
                      { initials: 'SC', name: 'Sarah Chen', role: 'VP Engineering', count: '12 interactions', color: 'bg-accent', countColor: 'text-signal' },
                      { initials: 'MJ', name: 'Mike Johnson', role: 'CTO', count: '3 interactions', color: 'bg-signal', countColor: 'text-ai-accent' },
                    ].map((c) => (
                      <div key={c.initials} className="flex items-center gap-2 px-2.5 py-1.5 bg-background rounded-md">
                        <div className={`w-6 h-6 rounded-full ${c.color} text-white text-[9px] font-semibold flex items-center justify-center`}>
                          {c.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-semibold truncate">{c.name}</p>
                          <p className="text-[9px] text-muted-foreground">{c.role}</p>
                        </div>
                        <span className={`text-[9px] font-semibold ${c.countColor}`}>{c.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground mb-2">
                    RECENT SIGNALS
                  </p>
                  <div className="space-y-1.5">
                    {[
                      { dot: 'bg-signal', text: 'Champion engaged. Replied same day' },
                      { dot: 'bg-ai-accent', text: 'New stakeholder added to thread' },
                      { dot: 'bg-destructive', text: 'Competitor mentioned in call transcript' },
                    ].map((s) => (
                      <div key={s.text} className="flex items-center gap-1.5 text-[11px]">
                        <div className={`w-1.5 h-1.5 rounded-full ${s.dot} shrink-0`} />
                        <span>{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Quote */}
        <FadeIn delay={0.3}>
          <div className="bg-accent text-accent-foreground rounded-xl p-8 md:p-10 mt-10">
            <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-ai-accent mb-3">
              Design Partner Feedback
            </p>
            <p className="font-serif text-lg md:text-xl italic leading-relaxed opacity-95">
              &ldquo;When you click in, it&rsquo;s very calming. It&rsquo;s
              giving me all the benefits&hellip; I want to stay focused on
              exactly what I need to do. I don&rsquo;t want to get
              distracted.&rdquo;
            </p>
            <p className="text-sm mt-3 opacity-70">
              , Design Partner, Enterprise AE
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
