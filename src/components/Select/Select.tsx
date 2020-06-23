import React, { forwardRef } from 'react'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export type SelectProps = BoxProps &
  React.SelectHTMLAttributes<HTMLSelectElement>

const fwcss = {
  border: '0',
  borderRadius: '3px',
  boxShadow: '0px 0px 0px 1px black inset',
  size: 'small',
  px: 'small',
  py: 'xsmall',
  width: '100%'
}

export const Select = forwardRef(
  (props: SelectProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Box as="select" ref={ref} fwcss={fwcss} fwelement="select" {...props} />
    )
  }
)

Select.displayName = 'Select'

export type SelectOptionProps = BoxProps &
  React.SelectHTMLAttributes<HTMLSelectElement>

export const SelectOption = forwardRef(
  (props: SelectOptionProps, ref: React.Ref<HTMLOptionElement>) => {
    return <Box as="option" ref={ref} fwelement="option" {...props} />
  }
)

SelectOption.displayName = 'SelectOption'
