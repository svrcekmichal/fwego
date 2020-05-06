import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface InputProps extends BoxProps {
  ref?: React.Ref<HTMLInputElement>
}

const fwcss = {
  border: '0',
  borderRadius: '3px',
  boxShadow: '0px 0px 0px 1px black inset',
  size: 'small',
  px: 'small',
  py: 'xsmall',
  width: '100%'
}

export const Input: React.FC<InputProps> = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Box as="input" ref={ref} fwcss={fwcss} fwelement="input" {...props} />
    )
  }
)

Input.displayName = 'FWInput'
