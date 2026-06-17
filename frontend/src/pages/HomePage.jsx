import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSplit } from '@/components/sections/AboutSplit'
import { PressFeature } from '@/components/sections/PressFeature'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Container, SectionHeading } from '@/components/common/Primitives'
import { homeContent } from '@/data/home'

export function HomePage() {
  return (
    <>
      <HeroSection {...homeContent.hero} />

      <section className="relative z-10 bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title={homeContent.motto}
            align="center"
            className="max-w-4xl"
          />
        </Container>
      </section>

      {homeContent.aboutSections.map((section) => (
        <AboutSplit key={section.id} {...section} />
      ))}

      <PressFeature {...homeContent.press} />
      <CtaBanner {...homeContent.cta} />
    </>
  )
}
