import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface ButtonProps extends BoxProps {
  ref?: React.Ref<HTMLButtonElement>
  type?: 'submit' | 'button' | 'reset'
}

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

export const Button: React.FC<ButtonProps> = forwardRef(
  (
    { as = 'button', children, type = 'button', ...props }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Box
        as={as}
        ref={ref}
        // @ts-ignore TODO @ben fix
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

Button.displayName = 'FWButton'
