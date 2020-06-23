import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Button, Inline, Stack } from '..'
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

export const FWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      <Stack>
        <Inline>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text Button</Button>
        </Inline>
        <Inline>
          <Button disabled variant="primary">
            Disabled
          </Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
          <Button disabled variant="outline">
            Disabled
          </Button>
          <Button disabled variant="text">
            Disabled
          </Button>
        </Inline>
        <Inline>
          <Button variant="primary" px="xxxlarge" py="small" size="large">
            Large
          </Button>
        </Inline>
        <Inline>
          <Button variant="icon"></Button>
        </Inline>
      </Stack>
    </FWThemeProvider>
  )
}

export const FWThemeLight: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="light">
      <Stack bg="white">
        <Inline>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text Button</Button>
        </Inline>
        <Inline>
          <Button disabled variant="primary">
            Disabled
          </Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
          <Button disabled variant="outline">
            Disabled
          </Button>
          <Button disabled variant="text">
            Disabled
          </Button>
        </Inline>
        <Inline>
          <Button variant="primary" px="xxxlarge" py="small" size="large">
            Large
          </Button>
        </Inline>
        <Inline>
          <Button variant="icon"></Button>
        </Inline>
      </Stack>
    </FWThemeProvider>
  )
}
