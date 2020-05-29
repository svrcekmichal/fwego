import type { Theme } from './theme'
import {
  colors,
  fontSizes,
  fontOffsets,
  button,
  input,
  text,
  heading,
  variantPrimary,
  variantOutline,
  variantIcon,
  variantText
} from './fwShared'

const fwTheme: Theme = {
  colors: colors,
  fontSizes: fontSizes,
  fontOffsets: fontOffsets,
  button: {
    ...button,
    color: colors['white'],
    '&:hover': {
      color: colors['white']
    },
    '&:focus': {
      color: colors['white']
    }
  },
  input: {
    ...input,
    bg: colors['blk1'],
    color: colors['white']
  },
  text: {
    ...text
  },
  heading: {
    ...heading
  },
  variants: {
    primary: {
      ...variantPrimary
    },
    outline: {
      ...variantOutline,
      color: colors['white'],
      '&:hover': {
        color: colors['white'],
        bg: 'rgba(255, 255, 255, 0.2)'
      }
    },
    icon: {
      ...variantIcon,
      color: colors['white'],
      '&:hover': {
        color: colors['white'],
        bg: 'rgba(255, 255, 255, 0.2)'
      }
    },
    text: {
      ...variantText,
      color: colors['white'],
      '&:hover': {
        color: colors['white']
      }
    }
  }
}

export default fwTheme
