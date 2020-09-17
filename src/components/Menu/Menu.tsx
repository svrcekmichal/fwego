import React, { forwardRef } from 'react'
import {
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
  MenuLink as ReachMenuLink,
  MenuItem as ReachMenuItem,
  MenuPopover as ReachMenuPopover
} from '@reach/menu-button'
import type { MenuLinkProps as ReachMenuLinkProps } from '@reach/menu-button'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export const MenuList = forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
    return <Box as={ReachMenuList} ref={ref} fwelement="menuList" {...props} />
  }
)

export const MenuButton = forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Box as={ReachMenuButton} ref={ref} fwelement="menuButton" {...props} />
    )
  }
)

export const MenuLink = forwardRef(
  (props: ReachMenuLinkProps & BoxProps, ref: React.Ref<HTMLAnchorElement>) => {
    return <Box as={ReachMenuLink} ref={ref} fwelement="menuLink" {...props} />
  }
)

export const MenuItem = forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLAnchorElement>) => {
    return <Box as={ReachMenuItem} ref={ref} fwelement="menuItem" {...props} />
  }
)

export const MenuPopover = forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Box as={ReachMenuPopover} ref={ref} fwelement="menuPopover" {...props} />
    )
  }
)

MenuList.displayName = 'MenuList'
MenuButton.displayName = 'MenuButton'
MenuLink.displayName = 'MenuLink'
MenuItem.displayName = 'MenuItem'
MenuPopover.displayName = 'MenuPopover'

export { Menu } from '@reach/menu-button'
