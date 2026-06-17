import { useLayoutEffect, useRef, useState } from 'react'

function isInViewport(element, threshold = 0.12) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
  const ratio = visibleHeight / Math.max(rect.height, 1)
  return ratio >= threshold
}

export function useRevealOnScroll({ threshold = 0.12, once = true } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    if (isInViewport(element, threshold)) {
      setVisible(true)
      if (once) return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, visible }
}
