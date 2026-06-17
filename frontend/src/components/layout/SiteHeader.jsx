import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Container } from '@/components/common/Primitives'
import { navLinks, socialLinks } from '@/data/navigation'
import { images } from '@/lib/images'
import { cn } from '@/lib/utils'

function SocialIcon({ link, variant = 'header' }) {
  const iconSrc = images.brand.social[link.icon]
  const onLightSurface = variant === 'header' || variant === 'sheet'

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={link.name}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-sm transition-colors',
        onLightSurface ? 'hover:bg-secondary' : 'text-bone/70 hover:text-bone',
      )}
    >
      <img
        src={iconSrc}
        alt=""
        className={cn(
          'size-5 object-contain transition-opacity',
          onLightSurface && 'brightness-0 opacity-80 hover:opacity-100',
        )}
      />
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/90 shadow-sm backdrop-blur-sm">
      <Container className="flex h-[5.5rem] items-center justify-between">
        <Link to="/" className="shrink-0">
          <img
            src={images.brand.logo}
            alt="Mobiliato"
            className="h-11 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) =>
            link.disabled ? (
              <span
                key={link.href}
                className="cursor-not-allowed text-base text-muted-foreground/60"
                title="Próximamente"
              >
                {link.label}
                <span className="ml-1.5 text-[0.7rem] uppercase tracking-wider text-accent">
                  pronto
                </span>
              </span>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'text-base transition-colors',
                    isActive
                      ? 'border-b-2 border-accent pb-1 font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 md:flex">
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} link={link} variant="header" />
            ))}
          </div>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contacto">Contáctanos</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-serif text-left text-2xl">
                  Mobiliato
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.disabled ? (
                    <span
                      key={link.href}
                      className="text-muted-foreground/60"
                    >
                      {link.label} (próximamente)
                    </span>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="text-xl font-medium"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>
              <div className="mt-8 flex gap-2">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.name} link={link} variant="sheet" />
                ))}
              </div>
              <Button asChild className="mt-8 w-full">
                <Link to="/contacto" onClick={() => setOpen(false)}>
                  Contáctanos
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
