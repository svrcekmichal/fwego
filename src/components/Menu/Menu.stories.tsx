import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Menu, MenuButton, MenuList, MenuLink } from '..'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Menu,
  title: 'Menu',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<unknown> = () => {
  return (
    <Menu>
      <MenuButton>MenuButton</MenuButton>
      <MenuList>
        <MenuLink>Link 1</MenuLink>
        <MenuLink>Link 2</MenuLink>
        <MenuLink>Link 3</MenuLink>
      </MenuList>
    </Menu>
  )
}

export const FWThemeDark: React.FC<unknown> = () => {
  return (
    <FWThemeProvider theme="dark">
      <Menu>
        <MenuButton>MenuButton</MenuButton>
        <MenuList>
          <MenuLink>Link 1</MenuLink>
          <MenuLink>Link 2</MenuLink>
          <MenuLink>Link 3</MenuLink>
        </MenuList>
      </Menu>
    </FWThemeProvider>
  )
}

export const FWThemeLight: React.FC<unknown> = () => {
  return (
    <FWThemeProvider theme="light">
      <Menu>
        <MenuButton>MenuButton</MenuButton>
        <MenuList>
          <MenuLink>Link 1</MenuLink>
          <MenuLink>Link 2</MenuLink>
          <MenuLink>Link 3</MenuLink>
        </MenuList>
      </Menu>
    </FWThemeProvider>
  )
}
