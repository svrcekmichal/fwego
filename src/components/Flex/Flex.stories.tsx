import React from 'react'
import { Flex } from '../'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Flex,
  title: 'Flex',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return <Flex>A Flexbox</Flex>
}
