import { PortfolioGallery } from '@/components/sections/PortfolioGallery'
import { PortfolioPageLayout } from '@/pages/ProyectosPage'
import { hogaresContent } from '@/data/proyectos'

export function HogaresPage() {
  return (
    <PortfolioPageLayout
      backHref="/proyectos"
      backLabel="Volver a proyectos"
      intro={hogaresContent.intro}
      sections={<PortfolioGallery sections={hogaresContent.sections} />}
      cta={hogaresContent.cta}
    />
  )
}
