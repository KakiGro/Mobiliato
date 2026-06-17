import { PortfolioGallery } from '@/components/sections/PortfolioGallery'
import { PortfolioPageLayout } from '@/pages/ProyectosPage'
import { comercialContent } from '@/data/proyectos'

export function ComercialPage() {
  return (
    <PortfolioPageLayout
      backHref="/proyectos"
      backLabel="Volver a proyectos"
      intro={comercialContent.intro}
      sections={<PortfolioGallery sections={comercialContent.sections} />}
      cta={comercialContent.cta}
    />
  )
}
