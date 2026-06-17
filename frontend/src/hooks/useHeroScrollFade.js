import { useEffect, useRef, useState } from 'react'

export function useHeroScrollFade() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const element = ref.current
      if (!element) return

      const { top, height } = element.getBoundingClientRect()
      if (height <= 0) {
        setProgress(0)
        return
      }

      const scrolled = Math.min(Math.max(-top, 0), height)
      setProgress(scrolled / height)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const opacity = Math.max(0, 1 - progress * 1.15)

  return { ref, progress, opacity }
}

