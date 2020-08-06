/** @jsx jsx */
import React, { forwardRef } from 'react'
import { css, jsx } from '@emotion/core'
import useSpace from '../../hooks/useSpace'
import type { Space } from '../../theme/spaces'
import { Flex } from '../Flex/Flex'
import type { BoxProps } from '../Box/Box'

export interface InlineProps extends BoxProps {
  align?: 'left' | 'right'
  space?: Space
}

export const Inline = forwardRef(
  (
    { align = 'left', children, space = 'medium', ...props }: InlineProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const spacing = useSpace(space)

    const styles = css`
      margin-top: -${spacing};
      > * {
        margin-top: ${spacing};
      }
      ${align === 'left' &&
      css`
        justify-content: flex-start;
        > *:not(:last-child) {
          margin-right: ${spacing};
        }
      `}
      ${align === 'right' &&
      css`
        justify-content: flex-end;
        > *:not(:first-child) {
          margin-left: ${spacing};
        }
      `}
    `

    return (
      <Flex
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        css={styles}
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    )
  }
)

Inline.displayName = 'Inline'
