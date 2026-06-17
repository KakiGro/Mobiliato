import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Container } from '@/components/common/Primitives'
import { cn } from '@/lib/utils'

function ServiceGallery({ service, open, onOpenChange }) {
  const [index, setIndex] = useState(0)
  const gallery = (service?.gallery || []).filter((src) => src)

  const goPrev = () => setIndex((i) => (i === 0 ? gallery.length - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === gallery.length - 1 ? 0 : i + 1))

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value)
        if (!value) setIndex(0)
      }}
    >
      <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b px-6 py-5">
          <DialogTitle className="font-serif text-3xl">
            {service?.title}
          </DialogTitle>
          {service?.description && (
            <p className="text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          )}
        </DialogHeader>
        {gallery.length > 0 ? (
          <div className="relative bg-muted">
            <img
              src={gallery[index]}
              alt={`${service?.title} ${index + 1}`}
              className="max-h-[75vh] w-full object-contain"
              onError={(e) => {
                e.currentTarget.src = service.thumb
              }}
            />
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-background/90 p-2.5 shadow"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-background/90 p-2.5 shadow"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="p-6">
            <img
              src={service?.thumb}
              alt={service?.title}
              className="w-full object-cover"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function ServiceTile({ service, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(service)}
      className="group relative aspect-[3/4] w-full overflow-hidden text-left"
    >
      <img
        src={service.thumb}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="font-serif text-2xl text-bone md:text-3xl">{service.title}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.15em] text-bone/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Ver galería
        </p>
      </div>
    </button>
  )
}

export function ServicesGrid({ heading, services }) {
  const [selected, setSelected] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const openService = (service) => {
    setSelected(service)
    setDialogOpen(true)
  }

  return (
    <section className="bg-secondary py-16 md:py-24">
      <Container>
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(index === 1 && 'sm:mt-8 lg:mt-12')}
            >
              <ServiceTile service={service} onOpen={openService} />
            </div>
          ))}
        </div>
      </Container>

      <ServiceGallery
        service={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  )
}
