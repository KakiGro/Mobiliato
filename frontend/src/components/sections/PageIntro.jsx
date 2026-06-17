import { Container } from '@/components/common/Primitives'
import { cn } from '@/lib/utils'

export function PageIntro({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  image,
  imageAlt = '',
  className,
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-secondary/40 via-background to-background',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -top-20 right-0 h-48 w-48 rounded-full bg-accent/8"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-primary/4"
        aria-hidden
      />

      {image && (
        <>
          <div className="absolute inset-y-0 right-0 hidden w-[42%] md:block lg:w-[38%]">
            <img
              src={image}
              alt=""
              aria-hidden
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/85 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-28 md:hidden">
            <img
              src={image}
              alt=""
              aria-hidden
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
        </>
      )}

      <Container className="relative py-16 md:py-24 lg:py-28">
        <div className="flex gap-5 md:gap-6">
          <div
            className="mt-1 w-1 shrink-0 bg-gradient-to-b from-accent via-accent/70 to-primary/40"
            aria-hidden
          />

          <div className="max-w-3xl pb-8 md:pb-0">
            <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>

            <h1 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              {title}
              {titleAccent && (
                <>
                  <br className="hidden sm:block" />
                  <span className="italic text-foreground/90">{titleAccent}</span>
                </>
              )}
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {subtitle}
              </p>
            )}

            <div
              className="mt-8 h-px w-16 bg-accent/60"
              aria-hidden
            />
          </div>
        </div>

        {image && imageAlt && (
          <p className="sr-only">{imageAlt}</p>
        )}
      </Container>
    </section>
  )
}
