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
        color: colors['blk1']
      }
    },
    icon: {
      ...variantIcon,
      '&:hover': {
        color: colors['blk1']
      }
    },
    text: {
      ...variantText,
      '&:hover': {
        color: colors['blk1']
      }
    }
  }
}

export default fwTheme
