import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function PageTransition() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()
  const isBack = navigationType === 'POP'

  return (
    <>
      <div
        key={`veil-${pathname}`}
        className={cn(
          'page-veil pointer-events-none absolute inset-0 z-20 bg-background',
          isBack ? 'page-veil--back' : 'page-veil--forward',
        )}
        aria-hidden
      />
      <div
        key={pathname}
        className={cn(
          'page-transition',
          isBack ? 'page-transition--back' : 'page-transition--forward',
        )}
      >
        <Outlet />
      </div>
    </>
  )
}
