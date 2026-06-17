import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const textareaVariants = cva(
  'w-full min-w-0 bg-transparent text-lg transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'min-h-24 rounded-sm border border-input px-3 py-2 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30',
        underline:
          'min-h-24 resize-none rounded-none border-0 border-b border-input px-0 py-2 focus-visible:border-accent focus-visible:ring-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Textarea({ className, variant = 'default', ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
