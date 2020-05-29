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
      '&:hover': {
        color: colors['white']
      }
    },
    icon: {
      ...variantIcon,
      '&:hover': {
        color: colors['white']
      }
    },
    text: {
      ...variantText,
      '&:hover': {
        color: colors['white']
      }
    }
  }
}

export default fwTheme
