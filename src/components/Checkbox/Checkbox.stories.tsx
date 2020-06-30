import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Checkbox, Box } from '..'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Checkbox,
  title: 'Checkbox',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return (
    <form>
      <Checkbox name="agreement" id="agreement">
        I accept all terms
      </Checkbox>
    </form>
  )
}

export const FWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      <form>
        <Checkbox name="agreement" id="agreement">
          I am the copyright owner or sole licensor of the material and I have
          not previously granted any rights to a third party.
        </Checkbox>
      </form>
    </FWThemeProvider>
  )
}

export const FWThemeLight: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="light">
      <form>
        <Box bg="white">
          <Checkbox name="agreement" id="agreement">
            I accept all terms
          </Checkbox>
        </Box>
      </form>
    </FWThemeProvider>
  )
}
