import React, { forwardRef } from 'react'
import { cx } from '../../emotion'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import { partitionStyleProps, combineCssProperties } from '../../utils'

export interface FlexProps extends BoxProps {
  alignItems?: string
  alignContent?: string
  flex?: number | string
  flexDirection?: string
  flexWrap?: string
  flexFlow?: string
  justifyContent?: string
  order?: string
}

const styleConfig = {
  alignItems: {
    name: 'align-items'
  },
  alignContent: {
    name: 'align-content'
  },
  flex: {
    name: 'flex'
  },
  flexDirection: {
    name: 'flex-direction'
  },
  flexWrap: {
    name: 'flex-wrap'
  },
  flexFlow: {
    name: 'flex-flow'
  },
  justifyContent: {
    name: 'justify-content'
  },
  order: {
    name: 'order'
  }
}

export const Flex = forwardRef(
  (
    { children, className, ...props }: FlexProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [forwardedProps, styleProps] = partitionStyleProps(props, styleConfig)
    const cls = combineCssProperties(styleProps, styleConfig)

    return (
      <Box
        ref={ref}
        className={cx(cls, className)}
        display="flex"
        {...forwardedProps}
      >
        {children}
      </Box>
    )
  }
)

Flex.displayName = 'Flex'
