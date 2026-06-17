import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/Primitives'
import { useHeroScrollFade } from '@/hooks/useHeroScrollFade'
import { cn } from '@/lib/utils'

export function HeroSection({ title, cta, image, imageAlt }) {
  const { ref, progress, opacity, isVisible } = useHeroScrollFade()
  const contentShift = progress * 48
  const [fixedBackground, setFixedBackground] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const update = () => setFixedBackground(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <section ref={ref} className="relative bg-background">
      {isVisible && (
        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          style={{ opacity }}
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `linear-gradient(rgba(27, 36, 28, 0.35), rgba(27, 36, 28, 0.2)), url(${image})`,
              backgroundAttachment: fixedBackground ? 'fixed' : 'scroll',
              transform: `scale(${1.04 + progress * 0.06})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/20 to-transparent" />
        </div>
      )}

      <Container
        className="relative z-10 flex min-h-[92svh] items-center py-28 md:min-h-[100svh] md:py-32"
        style={{
          opacity,
          transform: `translateY(${contentShift}px)`,
        }}
      >
        <div className="max-w-2xl">
          <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Mobiliato
          </span>
          <h1
            className={cn(
              'font-serif text-5xl leading-[1.05] text-bone md:text-7xl lg:text-8xl',
              'animate-in fade-in slide-in-from-bottom-4 duration-700',
            )}
          >
            {title}
          </h1>
          <div
            className="mt-10 animate-in fade-in slide-in-from-bottom-3 duration-700"
            style={{ animationDelay: '150ms', animationFillMode: 'backwards' }}
          >
            <Button asChild size="lg">
              <Link to={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </div>
      </Container>

      <p className="sr-only">{imageAlt}</p>
    </section>
  )
}
