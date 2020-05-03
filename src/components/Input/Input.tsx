import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface InputProps extends BoxProps {
  ref?: React.Ref<HTMLInputElement>
}

export const Input: React.FC<InputProps> = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Box
        as="input"
        border="0"
        borderRadius="3px"
        boxShadow="0px 0px 0px 1px black inset"
        fontSize="small"
        px="small"
        py="xsmall"
        width="100%"
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'FWInput'
