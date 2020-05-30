import React from 'react'
import { FWThemeProvider } from '../../models'
import { Heading } from '..'
import { headingConfig } from './Heading'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Heading,
  title: 'Heading',
  parameters: {
    info: infoAddOn
  }
}

export const HeadingFWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      {Object.keys(headingConfig).map((level: any) => {
        return (
          <Heading key={level} level={level}>
            Level {level} Heading
          </Heading>
        )
      })}
    </FWThemeProvider>
  )
}
