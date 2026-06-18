import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation, useNavigationType, useRoutes } from 'react-router-dom'
import { siteChildRoutes } from '@/routes/siteRoutes'
import { cn } from '@/lib/utils'

const COVER_MS = 380

function scrollForLocation(location) {
  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1))
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'instant' })
      return
    }
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

export function PageTransition() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [phase, setPhase] = useState('idle')
  const pendingLocation = useRef(location)
  const isBack = useRef(false)

  const page = useRoutes(siteChildRoutes, displayLocation)

  useLayoutEffect(() => {
    scrollForLocation(displayLocation)
  }, [displayLocation.pathname, displayLocation.hash, displayLocation.key])

  useEffect(() => {
    if (location.key === displayLocation.key) return

    pendingLocation.current = location
    isBack.current = navigationType === 'POP'
    setPhase('cover')
  }, [location, displayLocation.key, navigationType])

  useEffect(() => {
    if (phase !== 'cover') return

    const timer = window.setTimeout(() => {
      setDisplayLocation(pendingLocation.current)
      setPhase('reveal')
    }, COVER_MS)

    return () => window.clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    if (phase !== 'reveal') return

    const timer = window.setTimeout(() => setPhase('idle'), 620)

    return () => window.clearTimeout(timer)
  }, [phase])

  const direction = isBack.current ? 'back' : 'forward'

  return (
    <>
      {phase !== 'idle' ? (
        <>
          <div
            className={cn(
              'page-sweep pointer-events-none absolute inset-x-0 top-0 z-30 h-0.5 bg-accent',
              direction === 'back' ? 'origin-right' : 'origin-left',
              phase === 'reveal' && 'page-sweep--reveal',
            )}
            aria-hidden
          />
          <div
            className={cn(
              'page-veil pointer-events-none absolute inset-0 z-20',
              phase === 'cover' && 'page-veil--cover',
              phase === 'reveal' && 'page-veil--reveal',
              direction === 'back' ? 'page-veil--dir-back' : 'page-veil--dir-forward',
            )}
            aria-hidden
          />
        </>
      ) : null}
      <div className="relative">{page}</div>
    </>
  )
}
