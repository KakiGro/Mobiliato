import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageIntro } from '@/components/sections/PageIntro'
import { ProjectCategoryGrid } from '@/components/sections/ProjectCategoryGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Container } from '@/components/common/Primitives'
import { proyectosContent } from '@/data/proyectos'

export function ProyectosPage() {
  const { intro, categories, cta } = proyectosContent

  return (
    <>
      <PageIntro {...intro} />
      <ProjectCategoryGrid categories={categories} />
      <CtaBanner {...cta} />
    </>
  )
}

export function PortfolioPageLayout({ backHref, backLabel, intro, sections, cta }) {
  return (
    <>
      <PageIntro {...intro} />
      <Container className="py-6">
        <Link
          to={backHref}
          className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </Link>
      </Container>
      {sections}
      <CtaBanner {...cta} />
    </>
  )
}
