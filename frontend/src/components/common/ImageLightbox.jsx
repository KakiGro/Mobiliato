import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import {
  useBodyScrollLock,
  useGalleryNavigation,
  useImageTransition,
} from '@/hooks/useGalleryNavigation'
import { cn } from '@/lib/utils'

function preloadImage(src) {
  if (!src) return
  const img = new Image()
  img.src = src
}

export function ImageLightbox({
  items,
  open,
  onOpenChange,
  title,
  description,
  initialIndex = 0,
}) {
  const gallery = (items || []).filter(Boolean)
  const [index, setIndex] = useState(initialIndex)
  const touchStart = useRef(null)
  const phase = useImageTransition(index)

  useEffect(() => {
    if (open) setIndex(initialIndex)
  }, [open, initialIndex])

  useEffect(() => {
    if (!open || gallery.length === 0) return
    preloadImage(gallery[index])
    preloadImage(gallery[index === 0 ? gallery.length - 1 : index - 1])
    preloadImage(gallery[index === gallery.length - 1 ? 0 : index + 1])
  }, [open, index, gallery])

  useBodyScrollLock(open)

  const handleClose = () => onOpenChange(false)

  const { goPrev, goNext } = useGalleryNavigation({
    open,
    count: gallery.length,
    index,
    onIndexChange: setIndex,
    onClose: handleClose,
  })

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX
  }

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return
    const delta = event.changedTouches[0].clientX - touchStart.current
    if (Math.abs(delta) > 56) {
      if (delta > 0) goPrev()
      else goNext()
    }
    touchStart.current = null
  }

  if (!open || gallery.length === 0) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-forest/96 text-bone animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Galería de imágenes'}
    >
      <header className="flex shrink-0 items-center justify-between gap-6 border-b border-bone/10 px-5 py-5 md:px-10">
        <div className="min-w-0">
          {title && (
            <p className="truncate font-serif text-2xl md:text-3xl">{title}</p>
          )}
          {description && (
            <p className="mt-1 line-clamp-2 text-sm text-bone/65 md:text-base">
              {description}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-4">
          {gallery.length > 1 && (
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/55">
              {String(index + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
            </span>
          )}
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex size-11 items-center justify-center border border-bone/15 transition-colors hover:border-bone/35 hover:bg-bone/10"
            aria-label="Cerrar galería"
          >
            <X className="size-5" />
          </button>
        </div>
      </header>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-6 md:px-16"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          className="absolute inset-y-0 left-0 z-10 w-[18%] cursor-w-resize"
          onClick={goPrev}
          aria-label="Imagen anterior"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 z-10 w-[18%] cursor-e-resize"
          onClick={goNext}
          aria-label="Imagen siguiente"
        />

        <img
          key={gallery[index]}
          src={gallery[index]}
          alt={title ? `${title} ${index + 1}` : `Imagen ${index + 1}`}
          className={cn(
            'max-h-[62vh] w-full max-w-6xl object-contain transition-all duration-500 ease-out md:max-h-[68vh]',
            phase === 'visible'
              ? 'scale-100 opacity-100'
              : 'scale-[0.985] opacity-0',
          )}
          draggable={false}
        />

        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute top-1/2 left-3 z-20 hidden -translate-y-1/2 border border-bone/15 bg-forest/70 p-3 backdrop-blur-sm transition-colors hover:bg-bone/10 md:left-8 md:inline-flex"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute top-1/2 right-3 z-20 hidden -translate-y-1/2 border border-bone/15 bg-forest/70 p-3 backdrop-blur-sm transition-colors hover:bg-bone/10 md:right-8 md:inline-flex"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {gallery.length > 1 && (
        <footer className="shrink-0 border-t border-bone/10 px-4 py-4 md:px-8">
          <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto pb-1">
            {gallery.map((image, thumbIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(thumbIndex)}
                className={cn(
                  'relative h-16 w-20 shrink-0 overflow-hidden border transition-all duration-300 md:h-20 md:w-28',
                  thumbIndex === index
                    ? 'border-accent opacity-100'
                    : 'border-transparent opacity-45 hover:opacity-80',
                )}
                aria-label={`Ver imagen ${thumbIndex + 1}`}
                aria-current={thumbIndex === index}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </footer>
      )}
    </div>,
    document.body,
  )
}
