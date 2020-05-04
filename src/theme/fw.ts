import type { Theme } from './theme'

const buttonBase = {
  bg: 'transparent',
  borderRadius: '18px'
}

const colors = {
  primary: '#ff7061',
  blk1: '#121212',
  gray1: '#171717',
  gray2: '#2b2b2b',
  gray3: '#404040',
  offWhite: '#dbdbdb'
}

const fwTheme: Theme = {
  colors: colors,
  variants: {
    primary: {
      ...buttonBase,
      backgroundImage: 'linear-gradient(254deg, #f78361, #f54b64)'
    },
    outline: {
      ...buttonBase,
      boxShadow: 'inset 0 0 0 1px #4b4b4b',
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)',
        boxShadow: 'none'
      }
    },
    input: {
      bg: colors['blk1'],
      borderRadius: '12px',
      boxShadow: `0px 0px 0px 1px ${colors['gray3']} inset`,
      color: 'white',
      '::placeholder': {
        color: '#bdbdbd'
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `0px 0px 0px 2px ${colors['primary']} inset`
      }
    }
  }
}

export default fwTheme
