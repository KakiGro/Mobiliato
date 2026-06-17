import { PageIntro } from '@/components/sections/PageIntro'
import { ContactSection } from '@/components/sections/ContactSection'
import { contactContent } from '@/data/contact'

export function ContactoPage() {
  const { intro, form, details, features } = contactContent

  return (
    <>
      <PageIntro {...intro} />
      <ContactSection form={form} details={details} features={features} />
    </>
  )
}
