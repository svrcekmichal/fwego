import React, { forwardRef } from 'react'
import { cx } from '../../emotion'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import useBaselineStyles from './useBaselineStyles'

export interface TextProps extends BoxProps {
  baseline?: boolean
}

export const Text = forwardRef(
  (
    {
      baseline = false,
      children,
      className,
      size = 'medium',
      ...props
    }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const baselineCls = useBaselineStyles(baseline, size)

    return (
      <Box
        as="span"
        className={cx(baselineCls, className)}
        ref={ref}
        fwelement="text"
        size={size}
        weight="normal"
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Text.displayName = 'Text'
