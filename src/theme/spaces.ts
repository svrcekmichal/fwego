export interface Spaces {
  none: string
  xxxsmall: string
  xxsmall: string
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  xxlarge: string
  xxxlarge: string
}

export type Space = keyof Spaces

const spaces: Spaces = {
  none: '0px',
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '20px',
  xlarge: '24px',
  xxlarge: '28px',
  xxxlarge: '32px'
}

export default spaces
