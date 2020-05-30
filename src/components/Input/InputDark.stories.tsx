import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Input, Stack } from '..'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Input,
  title: 'Input',
  parameters: {
    info: infoAddOn
  }
}

export const FWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      <Stack>
        <Input placeholder="An input placeholder" />
        <Input as="textarea" placeholder="A textarea placeholder" />
      </Stack>
    </FWThemeProvider>
  )
}
