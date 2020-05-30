import React from 'react'
import { Button } from '..'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Button,
  title: 'Button',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return <Button>Button</Button>
}
