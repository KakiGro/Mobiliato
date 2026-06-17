import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  'w-full min-w-0 bg-transparent text-lg transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'h-10 rounded-sm border border-input px-3 py-2 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30',
        underline:
          'rounded-none border-0 border-b border-input px-0 py-2 focus-visible:border-accent focus-visible:ring-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Input({ className, type, variant = 'default', ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
