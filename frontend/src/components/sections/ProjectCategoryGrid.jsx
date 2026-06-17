import { Link } from 'react-router-dom'
import { Expand } from 'lucide-react'
import { Container } from '@/components/common/Primitives'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cn } from '@/lib/utils'

export function ProjectCategoryGrid({ categories }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function CategoryCard({ category, index }) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.1 })

  return (
    <Link
      ref={ref}
      to={category.href}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={cn(
        'group block overflow-hidden transition-all duration-700 ease-out',
        index === 1 && 'md:mt-12',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={category.cover}
          alt={category.title}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/25 to-transparent" />
        <div className="absolute inset-0 bg-forest/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Proyectos
          </p>
          <h3 className="mt-2 font-serif text-4xl text-bone md:text-5xl">
            {category.title}
          </h3>
          <div className="mt-4 flex items-center gap-2 text-bone/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
            <Expand className="size-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              Explorar galería
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
