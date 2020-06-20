import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Radio, Stack } from '..'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Radio,
  title: 'Radio',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return (
    <form>
      <Stack space="xsmall">
        <Radio name="salsa" id="mild" value="mild">
          Mild
        </Radio>
        <Radio name="salsa" id="medium" value="medium">
          Medium
        </Radio>
        <Radio name="salsa" id="hot" value="hot">
          Hot
        </Radio>
      </Stack>
    </form>
  )
}

export const FWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      <form>
        <Stack space="xsmall">
          <Radio name="salsa" id="mild" value="mild">
            Mild
          </Radio>
          <Radio name="salsa" id="medium" value="medium">
            Medium
          </Radio>
          <Radio name="salsa" id="hot" value="hot">
            Hot
          </Radio>
        </Stack>
      </form>
    </FWThemeProvider>
  )
}

export const FWThemeLight: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="light">
      <form>
        <Stack bg="white" space="xsmall">
          <Radio name="salsa" id="mild" value="mild">
            Mild
          </Radio>
          <Radio name="salsa" id="medium" value="medium">
            Medium
          </Radio>
          <Radio name="salsa" id="hot" value="hot">
            Hot
          </Radio>
        </Stack>
      </form>
    </FWThemeProvider>
  )
}
