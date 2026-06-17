import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/Primitives'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cn } from '@/lib/utils'

export function AboutSplit({
  title,
  description,
  cta,
  image,
  imageAlt,
  reversed = false,
}) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.15 })

  return (
    <section className="relative z-10 bg-background py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            'grid items-center gap-10 md:grid-cols-2 md:gap-16',
            reversed && 'md:[&>*:first-child]:order-2',
            'transition-all duration-700 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
            <Button asChild variant="default" className="mt-8">
              <Link to={cta.href}>{cta.label}</Link>
            </Button>
          </div>
          <div className="group overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
