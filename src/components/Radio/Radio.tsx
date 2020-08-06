/** @jsx jsx */
import React, { forwardRef } from 'react'
import { css, jsx } from '@emotion/core'
import { useTheme } from '../../hooks'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import { Text } from '../Text/Text'

export interface RadioProps extends BoxProps {
  checked?: boolean
  children?: React.ReactNode
  defaultChecked?: boolean
  id: string
  name: string
  value: string
}

export const Radio = forwardRef(
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
      value,
      ...props
    }: RadioProps,
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
          type="radio"
          value={value}
        />
        <Box
          width="16"
          height="16"
          borderRadius="50%"
          boxShadow="inset 0px 0px 0px 1px white"
          mr="xsmall"
          flexShrink="0"
        />
        <Text size={size} weight={weight}>
          {children}
        </Text>
      </Box>
    )
  }
)

Radio.displayName = 'Radio'
