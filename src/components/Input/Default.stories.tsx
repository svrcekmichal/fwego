import React from 'react'
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
