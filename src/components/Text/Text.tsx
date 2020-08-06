/** @jsx jsx */
import React, { forwardRef } from 'react'
import { jsx } from '@emotion/core'
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
    { baseline = false, children, ...props }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const baselineStyles = useBaselineStyles(baseline, props.size)

    return (
      <Box
        as="span"
        css={baselineStyles}
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
