/** @jsx jsx */
import React, { forwardRef } from 'react'
import { css, jsx } from '@emotion/core'
import { useTheme } from '../../hooks'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import { Text } from '../Text/Text'

export interface CheckboxProps extends BoxProps {
  checked?: boolean
  children?: React.ReactNode
  defaultChecked?: boolean
  id: string
  name: string
}

export const Checkbox = forwardRef(
  (
    {
      checked,
      children,
      defaultChecked,
      id,
      name,
      onChange,
      size = 'medium',
      weight = 'normal',
      ...props
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const theme = useTheme()

    return (
      <Box
        as="label"
        display="flex"
        alignItems="center"
        // @ts-ignore
        htmlFor={id}
        m="0"
        css={css`
          input:checked ~ div {
            background: ${theme.colors.primary};
            box-shadow: none;
          }
          input:checked ~ div:after {
            content: '';
            position: absolute;
            width: 4px;
            height: 8px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: translate3d(75%, 25%, 0) rotate(45deg);
            box-sizing: content-box;
          }
        `}
        {...props}
      >
        <Box
          as="input"
          display="none"
          // @ts-ignore
          checked={checked}
          defaultChecked={defaultChecked}
          id={id}
          // @ts-ignore
          name={name}
          onChange={onChange}
          ref={ref}
          type="checkbox"
        />
        <Box
          width="16"
          height="16"
          borderRadius="50%"
          boxShadow="inset 0px 0px 0px 2px white"
          mr="xsmall"
          position="relative"
          flexShrink="0"
        />
        <Text size={size} weight={weight}>
          {children}
        </Text>
      </Box>
    )
  }
)

Checkbox.displayName = 'Checkbox'
