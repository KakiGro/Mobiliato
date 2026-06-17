import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1440px] px-5 md:px-16', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      )}
    </div>
  )
}

export function TextLink({ to, children, className }) {
  return (
    <Link
      to={to}
      className={cn(
        'text-base font-medium text-primary underline-offset-4 transition-colors hover:text-accent hover:underline',
        className,
      )}
    >
      {children}
    </Link>
  )
}
