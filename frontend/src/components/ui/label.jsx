import * as React from 'react'
import { Label as LabelPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

function Label({ className, ...props }) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
