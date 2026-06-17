import { useCallback, useEffect, useState } from 'react'

export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}

export function useGalleryNavigation({ open, count, index, onIndexChange, onClose }) {
  const goPrev = useCallback(() => {
    if (count <= 1) return
    onIndexChange(index === 0 ? count - 1 : index - 1)
  }, [count, index, onIndexChange])

  const goNext = useCallback(() => {
    if (count <= 1) return
    onIndexChange(index === count - 1 ? 0 : index + 1)
  }, [count, index, onIndexChange])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      }
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, goPrev, goNext, onClose])

  return { goPrev, goNext }
}

export function useImageTransition(index) {
  const [phase, setPhase] = useState('visible')

  useEffect(() => {
    setPhase('hidden')
    const timer = window.setTimeout(() => setPhase('visible'), 120)
    return () => window.clearTimeout(timer)
  }, [index])

  return phase
}
