import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import fwThemeDark from '../theme/fwDark'
import fwThemeLight from '../theme/fwLight'
import type { Theme } from '../theme/theme'

type Props = {
  theme?: string
  children: React.ReactNode
}

const mapTheme = (theme): Theme => {
  switch (theme) {
    case 'light':
      return fwThemeLight
    default:
      return fwThemeDark
  }
}

export const FWThemeProvider: React.FC<Props> = ({
  theme,
  children
}: Props) => {
  return <ThemeProvider theme={mapTheme(theme)}>{children}</ThemeProvider>
}

FWThemeProvider.displayName = 'FWThemeProvider'
