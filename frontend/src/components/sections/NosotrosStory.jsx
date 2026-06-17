import { Container } from '@/components/common/Primitives'

export function NosotrosStory({ title, paragraphs, image, imageAlt }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-lg leading-relaxed text-muted-foreground md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
