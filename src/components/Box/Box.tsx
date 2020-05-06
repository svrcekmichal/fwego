import React, { forwardRef } from 'react'
import { cx } from '../../emotion'
import { useTheme } from '../../hooks'
import { partitionStyleProps, combineCssProperties } from '../../utils'
import type { FontSize, FontWeight } from '../../theme/fonts'
import type { Space, } from '../../theme/spaces'
import type { Overflow } from '../../theme/overflows'
import styleConfig from './config'

export type Size = string | number
export type ResponsiveSize = Size | Array<Size>
export type ResponsiveSpace = Space | Array<Space>
export type ResponsiveFontSize = FontSize | Array<FontSize>

export interface BoxProps extends React.HTMLAttributes<any> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  bg?: string
  backgroundImage?: string
  border?: string
  borderRadius?: string
  bottom?: ResponsiveSize
  boxShadow?: string
  boxSizing?: string
  color?: string
  cursor?: string
  display?: string
  fwcss?: { [key: string]: string }
  fwelement?: string
  fontSize?: ResponsiveFontSize
  fontWeight?: FontWeight
  height?: ResponsiveSize
  left?: ResponsiveSize
  m?: ResponsiveSpace
  mt?: ResponsiveSpace
  mr?: ResponsiveSpace
  mb?: ResponsiveSpace
  ml?: ResponsiveSpace
  my?: ResponsiveSpace
  mx?: ResponsiveSpace
  minHeight?: ResponsiveSpace
  minWidth?: ResponsiveSpace
  overflow?: Overflow
  overflowX?: Overflow
  overflowY?: Overflow
  p?: ResponsiveSpace
  pt?: ResponsiveSpace
  pr?: ResponsiveSpace
  pb?: ResponsiveSpace
  pl?: ResponsiveSpace
  py?: ResponsiveSpace
  px?: ResponsiveSpace
  position?: string
  ref?: React.Ref<any>
  right?: ResponsiveSize
  size?: ResponsiveFontSize
  textAlign?: string
  textDecoration?: string
  to?: string
  top?: ResponsiveSize
  width?: ResponsiveSize
  weight?: FontWeight
  variant?: string
  zIndex?: string | number
}

const fwBoxCss = {
  display: 'block',
  boxSizing: 'border-box',
  minWidth: '0px'
}

export const Box: React.FC<BoxProps> = forwardRef(
  (
    {
      as = 'div',
      children,
      className,
      fwcss = {},
      fwelement,
      variant,
      ...props
    }: BoxProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const Component = as
    const [forwardedProps, styleProps] = partitionStyleProps(props, styleConfig)

    let elementStyles = {}
    if (fwelement && theme[fwelement]) {
      elementStyles = theme[fwelement]
    }

    let variantStyles = {}
    if (variant && theme.variants?.[variant]) {
      variantStyles = theme.variants[variant]
    }

    const cls = combineCssProperties(
      {
        ...fwBoxCss,
        ...fwcss,
        ...elementStyles,
        ...variantStyles,
        ...styleProps
      },
      styleConfig,
      theme
    )

    return (
      <Component ref={ref} className={cx(className, cls)} {...forwardedProps}>
        {children}
      </Component>
    )
  }
)

Box.displayName = 'FWBox'
