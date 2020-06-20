import React, { forwardRef } from 'react'
import { css } from 'emotion'
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
      size,
      weight,
      value,
      ...props
    }: RadioProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const theme = useTheme()

    return (
      <Box {...props}>
        <Box
          as="label"
          display="flex"
          alignItems="center"
          // @ts-ignore
          htmlFor={id}
          m="0"
          className={css`
            input:checked ~ div {
              background: ${theme.colors.primary};
            }
          `}
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
          />
          <Text size={size} weight={weight}>
            {children}
          </Text>
        </Box>
      </Box>
    )
  }
)

Radio.displayName = 'Radio'
