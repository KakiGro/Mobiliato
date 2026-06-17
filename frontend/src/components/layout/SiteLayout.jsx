import { Outlet } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1 pt-[5.5rem]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
