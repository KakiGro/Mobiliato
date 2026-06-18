import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
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
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/80">
      <Container className="flex h-16 items-center justify-between gap-3 md:h-[5.5rem] md:gap-4">
        <Link to="/" className="shrink-0">
          <img
            src={images.brand.logo}
            alt="Mobiliato"
            className="h-12 w-auto md:h-18"
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

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden items-center gap-1 md:flex">
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} link={link} variant="header" />
            ))}
          </div>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contacto">Contáctanos</Link>
          </Button>
          <Button asChild size="sm" className="md:hidden">
            <Link to="/contacto">Contacto</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-10 shrink-0 md:hidden"
              >
                <Menu className="size-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full max-w-xs flex-col gap-0 p-0 sm:max-w-sm"
            >
              <SheetHeader className="border-b border-border px-6 py-5">
                <Link to="/" onClick={() => setOpen(false)}>
                  <img
                    src={images.brand.logo}
                    alt="Mobiliato"
                    className="h-10 w-auto"
                  />
                </Link>
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-1 flex-col px-3 py-4">
                {navLinks.map((link) =>
                  link.disabled ? (
                    <span
                      key={link.href}
                      className="px-3 py-3.5 text-lg text-muted-foreground/60"
                    >
                      {link.label}
                      <span className="ml-2 text-xs uppercase tracking-wider text-accent">
                        pronto
                      </span>
                    </span>
                  ) : (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'rounded-sm px-3 py-3.5 text-lg font-medium transition-colors',
                          isActive
                            ? 'bg-secondary text-foreground'
                            : 'text-foreground hover:bg-secondary/60',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ),
                )}
              </nav>
              <SheetFooter className="gap-4 border-t border-border px-6 py-6">
                <div className="flex justify-center gap-1">
                  {socialLinks.map((link) => (
                    <SocialIcon key={link.name} link={link} variant="sheet" />
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link to="/contacto" onClick={() => setOpen(false)}>
                    Contáctanos
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
