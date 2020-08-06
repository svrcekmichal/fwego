/** @jsx jsx */
import React, { forwardRef } from 'react'
import { css, jsx } from '@emotion/core'
import useSpace from '../../hooks/useSpace'
import type { Space } from '../../theme/spaces'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface StackProps extends BoxProps {
  space?: Space
}

export const Stack = forwardRef(
  (
    { children, space = 'medium', ...props }: StackProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const spacing = useSpace(space)

    const styles = css`
      > *:not(:last-child) {
        margin-bottom: ${spacing};
      }
    `

    return (
      <Box ref={ref} css={styles} {...props}>
        {children}
      </Box>
    )
  }
)

Stack.displayName = 'Stack'
