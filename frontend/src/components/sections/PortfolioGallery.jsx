import { useState } from 'react'
import { Expand } from 'lucide-react'
import { Container } from '@/components/common/Primitives'
import { ImageLightbox } from '@/components/common/ImageLightbox'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cn } from '@/lib/utils'

const tileLayouts = [
  'aspect-[4/3]',
  'aspect-[3/4] md:aspect-[5/6]',
  'aspect-square',
  'aspect-[5/4] md:col-span-1',
]

function GalleryTile({ image, alt, onOpen, index }) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.08 })

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
      className={cn(
        'group relative w-full overflow-hidden bg-muted',
        tileLayouts[index % tileLayouts.length],
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
    >
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-forest/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute right-4 bottom-4 flex items-center gap-2 text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
        <Expand className="size-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
          Ampliar
        </span>
      </div>
    </button>
  )
}

function SectionHeading({ title, visible }) {
  return (
    <div
      className={cn(
        'mb-10 transition-all duration-700 md:mb-14',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
    >
      <span className="mb-3 block h-px w-12 bg-accent" />
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
    </div>
  )
}

function GallerySection({ section, sectionIndex }) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.1 })
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const openAt = (index) => {
    setLightbox({ open: true, index })
  }

  return (
    <section
      ref={ref}
      className={cn(
        'py-16 md:py-24',
        sectionIndex % 2 === 1 ? 'bg-secondary' : 'bg-background',
      )}
    >
      <Container>
        <SectionHeading title={section.title} visible={visible} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {section.images.map((image, index) => (
            <GalleryTile
              key={image}
              image={image}
              alt={`${section.title} ${index + 1}`}
              index={index}
              onOpen={() => openAt(index)}
            />
          ))}
        </div>
      </Container>

      <ImageLightbox
        title={section.title}
        items={section.images}
        initialIndex={lightbox.index}
        open={lightbox.open}
        onOpenChange={(open) => setLightbox((prev) => ({ ...prev, open }))}
      />
    </section>
  )
}

export function PortfolioGallery({ sections }) {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <GallerySection
          key={section.id}
          section={section}
          sectionIndex={sectionIndex}
        />
      ))}
    </>
  )
}
