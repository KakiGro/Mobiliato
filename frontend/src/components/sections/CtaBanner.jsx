import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/Primitives'

export function CtaBanner({ title, subtitle, button }) {
  return (
    <section className="bg-forest py-20 text-bone md:py-28">
      <Container className="text-center">
        <h2 className="font-serif text-4xl text-bone md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-xl text-bone/80">{subtitle}</p>
        <Button asChild size="lg" className="mt-10">
          <Link to={button.href}>{button.label}</Link>
        </Button>
      </Container>
    </section>
  )
}
