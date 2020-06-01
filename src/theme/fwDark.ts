import merge from 'lodash/merge'
import cloneDeep from 'lodash/cloneDeep'
import type { Theme } from './theme'
import fwTheme, { colors } from './fw'

const darkOverrides = {
  text: {
    color: 'white'
  },
  heading: {
    color: 'white'
  },
  input: {
    bg: colors['blk1'],
    color: 'white',
    boxShadow: `0px 0px 0px 1px ${colors['gray3']} inset`,
    '::placeholder': {
      color: colors['gray5']
    }
  },
  variants: {
    outline: {
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)'
      }
    },
    icon: {
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)'
      }
    },
    text: {
      color: 'white',
      '&:hover': {
        color: 'white'
      }
    }
  }
}

const fwDarkTheme: Theme = merge(cloneDeep(fwTheme), darkOverrides)

export default fwDarkTheme
