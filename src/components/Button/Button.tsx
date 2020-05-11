import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export type ButtonProps = BoxProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const fwcss = {
  border: '0',
  borderRadius: '3px',
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  size: 'small',
  weight: 'bold',
  px: 'medium',
  py: 'xsmall',
  textAlign: 'center',
  textDecoration: 'none'
}

export const Button = forwardRef(
  (
    { as = 'button', children, type = 'button', ...props }: ButtonProps,
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        as={as}
        ref={ref}
        // @ts-ignore FIXME
        type={as === 'button' ? type : undefined}
        fwcss={fwcss}
        fwelement="button"
        variant="primary"
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Button.displayName = 'Button'
