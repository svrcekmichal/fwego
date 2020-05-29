import type { Theme } from './theme'
import {
  colors,
  fontSizes,
  fontOffsets,
  fontFamily,
  button,
  input
} from './fwShared'

const fwTheme: Theme = {
  colors: colors,
  fontSizes: fontSizes,
  fontOffsets: fontOffsets,
  button: {
    ...button,
    color: 'white',
    '&:hover': {
      color: 'white'
    },
    '&:focus': {
      color: 'white'
    }
  },
  input: {
    ...input,
    bg: colors['blk1'],
    color: 'white'
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
