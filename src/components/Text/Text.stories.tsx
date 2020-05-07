import React from 'react'
import { useTheme } from '../../hooks'
import { FWThemeProvider } from '../../models'
import { Text } from '../'
import infoAddOn from '../../../.storybook/infoAddOn'
import fwThemeDoNotUseOutsideStorybook from '../../../.storybook/fwThemeDoNotUseOutsideStorybook'

export default {
  component: Text,
  title: 'Text',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  const theme = useTheme()
  return (
    <>
      {Object.entries(theme.fontSizes)
        .slice()
        .reverse()
        .map(([size, px]: any) => {
          return (
            <Text key={size} size={size}>
              Text size {size} {px}
            </Text>
          )
        })}
    </>
  )
}

export const FWTheme: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
      {Object.entries(fwThemeDoNotUseOutsideStorybook.fontSizes)
        .slice()
        .reverse()
        .map(([size, px]: any) => {
          return (
            <Text key={size} size={size}>
              Text size {size} {px}
            </Text>
          )
        })}
    </FWThemeProvider>
  )
}
