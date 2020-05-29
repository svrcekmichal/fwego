import type { Theme } from './theme'
import {
  colors,
  fontSizes,
  fontOffsets,
  fontFamily,
  button,
  input
} from './fwShared'

// TODO: @deric finish changing values for light theme
const fwTheme: Theme = {
  colors: colors,
  fontSizes: fontSizes,
  fontOffsets: fontOffsets,
  button: {
    ...button,
    color: colors['blk1'],
    '&:hover': {
      color: colors['blk1']
    },
    '&:focus': {
      color: colors['blk1']
    }
  },
  input: {
    ...input,
    bg: colors['white'],
    color: colors['blk1']
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
