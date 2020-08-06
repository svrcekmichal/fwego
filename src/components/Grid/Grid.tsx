import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps, ResponsiveString } from '../Box/Box'

interface GridProps extends BoxProps {
  columns?: ResponsiveString
  rows?: ResponsiveString
}

export const Grid = forwardRef(
  (
    { children, rows, columns, ...props }: GridProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        ref={ref}
        display="grid"
        gridTemplateRows={rows}
        gridTemplateColumns={columns}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Grid.displayName = 'Grid'
