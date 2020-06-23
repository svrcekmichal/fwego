import React, { forwardRef } from 'react'
import { cx } from '../../emotion'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import useBaselineStyles from './useBaselineStyles'

export interface TextProps extends BoxProps {
  baseline?: boolean
}

const fwcss = {
  size: 'medium'
}

export const Text = forwardRef(
  (
    { baseline = false, children, className, ...props }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const baselineCls = useBaselineStyles(baseline, props.size)

    return (
      <Box
        as="span"
        className={cx(baselineCls, className)}
        ref={ref}
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
