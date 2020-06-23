import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Select, SelectOption, Label } from '..'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Select,
  title: 'Select',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return (
    <>
      <Label htmlFor="salsa-select">Salsa</Label>
      <Select name="salsa" id="salsa-select">
        <SelectOption value="mild">Mild</SelectOption>
        <SelectOption value="medium">Medium</SelectOption>
        <SelectOption value="hot">Hot</SelectOption>
      </Select>
    </>
  )
}

export const FWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      <Label htmlFor="salsa-select">Salsa</Label>
      <Select name="salsa" id="salsa-select">
        <SelectOption value="mild">Mild</SelectOption>
        <SelectOption value="medium">Medium</SelectOption>
        <SelectOption value="hot">Hot</SelectOption>
      </Select>
    </FWThemeProvider>
  )
}

export const FWThemeLight: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="light">
      <Label htmlFor="salsa-select">Salsa</Label>
      <Select name="salsa" id="salsa-select">
        <SelectOption value="mild">Mild</SelectOption>
        <SelectOption value="medium">Medium</SelectOption>
        <SelectOption value="hot">Hot</SelectOption>
      </Select>
    </FWThemeProvider>
  )
}
