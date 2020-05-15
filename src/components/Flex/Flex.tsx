import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export const Flex = forwardRef(
  ({ children, ...props }: BoxProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Box ref={ref} display="flex" {...props}>
        {children}
      </Box>
    )
  }
)

Flex.displayName = 'Flex'
