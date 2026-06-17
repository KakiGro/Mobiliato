import { Container } from '@/components/common/Primitives'

export function PressFeature({ title, link, image, imageAlt }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">{title}</h2>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium text-primary underline-offset-4 hover:text-accent hover:underline"
          >
            {link.label}
          </a>
        </div>
        <div className="mt-8 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </Container>
    </section>
  )
}
