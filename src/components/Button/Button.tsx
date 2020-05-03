import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface ButtonProps extends BoxProps {
  ref?: React.Ref<HTMLButtonElement>
  type?: 'submit' | 'button' | 'reset'
}

export const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      as = 'button',
      children,
      type = 'button',
      variant = 'primary',
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Box
        as={as}
        border="0"
        borderRadius="3px"
        bg={variant}
        color="white"
        cursor="pointer"
        display="inline-block"
        fontSize="small"
        fontWeight="bold"
        px="medium"
        py="xsmall"
        ref={ref}
        textAlign="center"
        textDecoration="none"
        // @ts-ignore TODO @ben fix
        type={as === 'button' ? type : undefined}
        variant={variant}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Button.displayName = 'FWButton'
