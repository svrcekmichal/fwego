import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Input, Stack } from '../'

export default {
  component: Input,
  title: 'Input'
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
