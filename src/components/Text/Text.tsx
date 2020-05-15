import React, { forwardRef } from 'react'
import { cx } from '../../emotion'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import useBaselineStyles from './useBaselineStyles'

export interface TextProps extends BoxProps {
  baseline?: boolean
}

const fwcss = {
  m: 'none',
  size: 'medium',
  weight: 'normal'
}

export const Text = forwardRef(
  (
    { baseline = false, children, className, size, ...props }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const baselineCls = useBaselineStyles(baseline, size)

    return (
      <Box
        as="span"
        className={cx(baselineCls, className)}
        ref={ref}
        size={size}
        fwcss={fwcss}
        fwelement="text"
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Text.displayName = 'Text'
