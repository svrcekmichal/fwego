import React from 'react'
import { FWThemeProvider } from '../../models'
import { Text } from '..'
import infoAddOn from '../../../.storybook/infoAddOn'
import fwThemeDarkDoNotUseOutsideStorybook from '../../../.storybook/fwThemeDarkDoNotUseOutsideStorybook'

export default {
  component: Text,
  title: 'Text',
  parameters: {
    info: infoAddOn
  }
}

export const FWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      {Object.entries(fwThemeDarkDoNotUseOutsideStorybook.fontSizes)
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
