import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const pathnameRef = useRef(pathname)

  useLayoutEffect(() => {
    const pathnameChanged = pathname !== pathnameRef.current
    pathnameRef.current = pathname

    if (pathnameChanged || !hash) return

    const id = decodeURIComponent(hash.slice(1))
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
