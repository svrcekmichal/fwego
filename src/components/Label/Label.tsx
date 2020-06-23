import React, { forwardRef } from 'react'
import { Text } from '../Text/Text'
import type { BoxProps } from '../Box/Box'

const fwcss = {
  m: 'none',
  size: 'small'
}

export const Label = forwardRef(
  (
    {
      children,
      ...props
    }: BoxProps & React.LabelHTMLAttributes<HTMLLabelElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Text as="label" fwcss={fwcss} fwelement="label" ref={ref} {...props}>
        {children}
      </Text>
    )
  }
)

Label.displayName = 'Label'
