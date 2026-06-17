import { PageIntro } from '@/components/sections/PageIntro'
import { NosotrosStory } from '@/components/sections/NosotrosStory'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { nosotrosContent } from '@/data/nosotros'

export function NosotrosPage() {
  const { intro, story, servicesHeading, services, cta } = nosotrosContent

  return (
    <>
      <PageIntro {...intro} />

      <NosotrosStory
        title={story.title}
        paragraphs={story.paragraphs}
        image={story.image}
        imageAlt={story.imageAlt}
      />

      <ServicesGrid heading={servicesHeading} services={services} />

      <CtaBanner {...cta} />
    </>
  )
}
