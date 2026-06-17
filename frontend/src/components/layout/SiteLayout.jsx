import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { PageTransition } from '@/components/layout/PageTransition'

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="relative flex-1 pt-[5.5rem]">
        <PageTransition />
      </main>
      <SiteFooter />
    </div>
  )
}
