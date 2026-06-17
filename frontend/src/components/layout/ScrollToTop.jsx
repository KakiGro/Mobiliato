import { useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useLayoutEffect(() => {
    if (navigationType === 'POP') return

    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'instant' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, navigationType])

  return null
}
