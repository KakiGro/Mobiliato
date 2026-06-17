import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/Primitives'
import { cn } from '@/lib/utils'

export function AboutSplit({
  title,
  description,
  cta,
  image,
  imageAlt,
  reversed = false,
}) {
  return (
    <section className="relative z-10 bg-background py-16 md:py-24">
      <Container>
        <div
          className={cn(
            'grid items-center gap-10 md:grid-cols-2 md:gap-16',
            reversed && 'md:[&>*:first-child]:order-2',
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
          <div className="overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
