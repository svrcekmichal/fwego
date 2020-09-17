import type { Theme } from './theme'

const fontFamily =
  'Avenir Next, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'

export const colors = {
  primaryGradient: 'linear-gradient(254deg, #f78361, #f54b64)',
  primary: '#ff7061',
  blk1: '#121212',
  gray1: '#171717',
  gray2: '#2b2b2b',
  gray3: '#404040',
  gray4: '#9b9b9b',
  gray5: '#bdbdbd'
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
    borderRadius: 12,
    fontFamily: fontFamily,
    '&:focus': {
      outline: 'none',
      boxShadow: `0px 0px 0px 2px ${colors['primary']} inset`
    }
  },
  select: {
    borderRadius: 12,
    fontFamily: fontFamily,
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
  label: {
    fontFamily: fontFamily,
    weight: 'bold'
  },
  modalContent: {
    borderRadius: 6
  },
  comboboxPopover: {
    borderRadius: 12
  },
  menuButton: {
    border: 0,
    bg: 'transparent',
    cursor: 'pointer'
  },
  menuList: {
    px: 'none',
    py: 'xsmall',
    borderRadius: 8,
    border: 'none',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)'
  },
  menuItem: {
    py: 'xsmall',
    px: 'small',
    size: 'small',
    weight: 'medium',
    fontFamily: fontFamily
  },
  menuLink: {
    py: 'xsmall',
    px: 'small',
    size: 'small',
    weight: 'medium',
    fontFamily: fontFamily,
    '&:hover': {
      textDecoration: 'none'
    }
  },
  variants: {
    primary: {
      backgroundImage: colors['primaryGradient']
    },
    secondary: {
      bg: colors['gray3'],
      '&:hover': {
        bg: '#5c5c5c',
        textDecoration: 'none'
      }
    },
    outline: {
      boxShadow: 'inset 0 0 0 1px #4b4b4b',
      '&:hover': {
        boxShadow: 'none',
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
        boxShadow: 'none',
        textDecoration: 'none'
      }
    },
    text: {
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
}

export default fwTheme
