import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Input, Stack } from '../'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Input,
  title: 'Input',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return (
    <Stack>
      <Input placeholder="A input placeholder" />
      <Input as="textarea" placeholder="A textarea placeholder" />
    </Stack>
  )
}

export const FWTheme: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
      <Stack>
        <Input placeholder="An input placeholder" />
        <Input as="textarea" placeholder="A textarea placeholder" />
      </Stack>
    </FWThemeProvider>
  )
}
