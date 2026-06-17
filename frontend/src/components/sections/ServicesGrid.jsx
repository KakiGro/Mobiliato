import { useState } from 'react'
import { Expand } from 'lucide-react'
import { Container } from '@/components/common/Primitives'
import { ImageLightbox } from '@/components/common/ImageLightbox'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cn } from '@/lib/utils'

function ServiceTile({ service, onOpen, index }) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.08 })
  const gallery = [service.thumb, ...(service.gallery || [])].filter(Boolean)

  return (
    <div
      ref={ref}
      className={cn(
        index === 1 && 'sm:mt-8 lg:mt-12',
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(service, gallery)}
        className="group relative aspect-[3/4] w-full overflow-hidden text-left"
      >
        <img
          src={service.thumb}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
        <div className="absolute inset-0 bg-forest/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <h3 className="font-serif text-2xl text-bone md:text-3xl">{service.title}</h3>
          <div className="mt-3 flex items-center gap-2 text-bone/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
            <Expand className="size-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              Ver galería
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}

export function ServicesGrid({ heading, services }) {
  const [lightbox, setLightbox] = useState({
    open: false,
    title: '',
    description: '',
    images: [],
    index: 0,
  })

  const openService = (service, images) => {
    setLightbox({
      open: true,
      title: service.title,
      description: service.description,
      images,
      index: 0,
    })
  }

  return (
    <section className="bg-secondary py-16 md:py-24">
      <Container>
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="mb-3 block h-px w-12 bg-accent" />
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <ServiceTile
              key={service.id}
              service={service}
              index={index}
              onOpen={openService}
            />
          ))}
        </div>
      </Container>

      <ImageLightbox
        title={lightbox.title}
        description={lightbox.description}
        items={lightbox.images}
        initialIndex={lightbox.index}
        open={lightbox.open}
        onOpenChange={(open) => setLightbox((prev) => ({ ...prev, open }))}
      />
    </section>
  )
}
