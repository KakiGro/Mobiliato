import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Primitives'
import { socialLinks } from '@/data/navigation'

function SocialIcon({ link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={link.name}
      className="text-base text-bone/60 transition-colors hover:text-bone"
    >
      {link.name}
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-forest text-bone">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-serif text-3xl">Mobiliato</p>
          <p className="mt-4 text-base leading-relaxed text-bone/60">
            Despacho de diseño con más de 30 años de experiencia en arquitectura
            de interiores y mobiliario de alta calidad.
          </p>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Empresa
          </h5>
          <div className="flex flex-col gap-2">
            <Link
              to="/nosotros"
              className="text-base text-bone/60 transition-colors hover:text-bone"
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className="text-base text-bone/60 transition-colors hover:text-bone"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Ubicación
          </h5>
          <p className="text-base text-bone/60">Ciudad de México</p>
          <p className="mt-2 text-base text-bone/60">Cobertura nacional</p>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Redes
          </h5>
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} link={link} />
            ))}
          </div>
          <p className="mt-8 text-sm text-bone/40">
            © {new Date().getFullYear()} Mobiliato. Hecho en México.
          </p>
        </div>
      </Container>
    </footer>
  )
}
