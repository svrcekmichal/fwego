import type { Theme } from './theme'

const fontFamily =
  'Avenir Next, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'

const colors = {
  primaryGradient: 'linear-gradient(254deg, #f78361, #f54b64)',
  primary: '#ff7061',
  blk1: '#121212',
  gray1: '#171717',
  gray2: '#2b2b2b',
  gray3: '#404040',
  gray4: '#9b9b9b',
  gray5: '#bdbdbd',
  white: '#ffffff'
}

const fontSizes = {
  xxsmall: '10px',
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '20px',
  xxlarge: '24px',
  xxxlarge: '30px'
}

const fontOffsets = {
  xxsmall: ['1px', '3px'],
  xsmall: ['1px', '4px'],
  small: ['2px', '4px'],
  medium: ['2px', '5px'],
  large: ['3px', '6px'],
  xlarge: ['4px', '6px'],
  xxlarge: ['5px', '7px'],
  xxxlarge: ['6px', '8px']
}

const fwTheme: Theme = {
  colors: colors,
  fontSizes: fontSizes,
  fontOffsets: fontOffsets,
  button: {
    bg: 'transparent',
    borderRadius: '18px',
    fontFamily: fontFamily,
    weight: 'semiBold'
  },
  input: {
    bg: colors['blk1'],
    borderRadius: '12px',
    boxShadow: `0px 0px 0px 1px ${colors['gray3']} inset`,
    color: 'white',
    fontFamily: fontFamily,
    '::placeholder': {
      color: colors['gray5']
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0px 0px 0px 2px ${colors['primary']} inset`
    }
  },
  text: {
    fontFamily: fontFamily,
    weight: 'medium'
  },
  heading: {
    fontFamily: fontFamily,
    weight: 'bold'
  },
  variants: {
    primary: {
      backgroundImage: colors['primaryGradient']
    },
    outline: {
      boxShadow: `inset 0 0 0 1px #4b4b4b`,
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)',
        boxShadow: 'none'
      }
    }
  }
}

export default fwTheme
