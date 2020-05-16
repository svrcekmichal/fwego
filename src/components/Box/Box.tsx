import React, { forwardRef } from 'react'
import { cx } from '../../emotion'
import { useTheme } from '../../hooks'
import { partitionStyleProps, combineCssProperties } from '../../utils'
import type { FontSize, FontWeight } from '../../theme/fonts'
import type { Space } from '../../theme/spaces'
import styleConfig from './config'

export type Size = string | number
export type ResponsiveSize = Size | Array<Size>
export type ResponsiveSpace = Space | Array<Space> | ResponsiveSize
export type ResponsiveFontSize = FontSize | Array<FontSize>
export type ResponsiveString = string | Array<string>
export type ResponsiveProp = string | number | Array<string> | Array<number>
export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto'
export type ResponsiveOverflow = Overflow | Array<Overflow>
type FixMe = any

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  alignContent?: ResponsiveString
  alignItems?: ResponsiveString
  alignSelf?: ResponsiveString
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  bg?: ResponsiveString
  backgroundImage?: ResponsiveString
  backgroundPosition?: ResponsiveString
  backgroundSize?: ResponsiveString
  border?: ResponsiveString
  borderCollapse?: ResponsiveString
  borderRadius?: ResponsiveString
  borderTopLeftRadius?: ResponsiveSize
  borderTopRightRadius?: ResponsiveSize
  borderBottomLeftRadius?: ResponsiveSize
  borderBottomRightRadius?: ResponsiveSize
  bottom?: ResponsiveSize
  boxShadow?: ResponsiveString
  boxSizing?: ResponsiveString
  // should be ResponsiveString but conflicts with HTMLAttributes
  color?: FixMe
  cursor?: ResponsiveString
  display?: ResponsiveString
  flex?: ResponsiveProp
  flexDirection?: ResponsiveString
  flexWrap?: ResponsiveString
  flexFlow?: ResponsiveString
  fwcss?: { [key: string]: string }
  fwelement?: string
  fontSize?: ResponsiveFontSize
  fontWeight?: FontWeight
  height?: ResponsiveSize
  justifyContent?: ResponsiveString
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
  maxHeight?: ResponsiveSpace
  maxWidth?: ResponsiveSpace
  order?: ResponsiveProp
  overflow?: ResponsiveOverflow
  overflowX?: ResponsiveOverflow
  overflowY?: ResponsiveOverflow
  p?: ResponsiveSpace
  pt?: ResponsiveSpace
  pr?: ResponsiveSpace
  pb?: ResponsiveSpace
  pl?: ResponsiveSpace
  py?: ResponsiveSpace
  px?: ResponsiveSpace
  pointerEvents?: ResponsiveString
  position?: ResponsiveString
  right?: ResponsiveSize
  size?: ResponsiveFontSize
  textAlign?: ResponsiveString
  textDecoration?: ResponsiveString
  textOverflow?: ResponsiveString
  textShadow?: ResponsiveString
  top?: ResponsiveSize
  transition?: ResponsiveString
  whiteSpace?: ResponsiveString
  width?: ResponsiveSize
  weight?: FontWeight | Array<FontWeight>
  wordBreak?: ResponsiveString
  wordWrap?: ResponsiveString
  variant?: string
  zIndex?: ResponsiveProp
}

const fwBoxCss = {
  display: 'block',
  boxSizing: 'border-box',
  minWidth: '0px'
}

export const Box = forwardRef(
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
    ref: React.Ref<HTMLElement>
  ) => {
    const theme = useTheme()
    const Component = as
    const [forwardedProps, styleProps] = partitionStyleProps(props, styleConfig)

    let elementStyles = {}
    if (fwelement && fwelement in theme) {
      elementStyles = theme[fwelement]
    }

    let variantStyles = {}
    if (variant && variant in theme.variants) {
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

Box.displayName = 'Box'
