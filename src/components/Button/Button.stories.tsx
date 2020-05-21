import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Button, Inline } from '../'
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

export const FWTheme: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
      <Inline space="small" mb="small">
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text Button</Button>
      </Inline>
      <Inline space="small" mb="small">
        <Button disabled variant="primary">
          Disabled
        </Button>
        <Button disabled variant="outline">
          Disabled
        </Button>
        <Button disabled variant="text">
          Disabled
        </Button>
      </Inline>
      <Inline space="small">
        <Button variant="primary" px="xxxlarge" py="small" size="large">
          Large
        </Button>
      </Inline>
    </FWThemeProvider>
  )
}
