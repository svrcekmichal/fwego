import type { Theme } from './theme'
import { colors, fontSizes, fontOffsets, fontFamily } from './fwShared'

// TODO: @deric finish changing values for light theme
const fwTheme: Theme = {
  colors: colors,
  fontSizes: fontSizes,
  fontOffsets: fontOffsets,
  button: {
    bg: 'transparent',
    borderRadius: '500px',
    color: 'white',
    fontFamily: fontFamily,
    weight: 'semiBold',
    lineHeight: 1.5,
    '&:hover': {
      color: 'white',
      textDecoration: 'none'
    },
    '&:focus': {
      color: 'white',
      textDecoration: 'none'
    },
    '&:disabled': {
      opacity: 0.3
    }
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
      boxShadow: 'inset 0 0 0 1px #4b4b4b',
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)',
        boxShadow: 'none',
        color: 'white',
        textDecoration: 'none'
      }
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderRadius: '50%',
      height: 37,
      width: 37,
      p: 'none',
      boxShadow: 'inset 0 0 0 1px #4b4b4b',
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)',
        boxShadow: 'none',
        color: 'white',
        textDecoration: 'none'
      }
    },
    text: {
      '&:hover': {
        color: 'white',
        textDecoration: 'underline'
      }
    }
  }
}

export default fwTheme
