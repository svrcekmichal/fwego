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

export const Default: React.FC<{}> = () => {
  return (
    <Stack>
      <Input placeholder="A input placeholder" />
      <Input as="textarea" placeholder="A textarea placeholder" />
    </Stack>
  )
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

export const FWThemeLight: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="light">
      <Stack bg="white">
        <Input placeholder="An input placeholder" />
        <Input as="textarea" placeholder="A textarea placeholder" />
      </Stack>
    </FWThemeProvider>
  )
}
