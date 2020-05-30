import React from 'react'
import { Box, Heading, Inline } from '..'
import { headingConfig } from './Heading'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Heading,
  title: 'Heading',
  parameters: {
    info: infoAddOn
  }
}

export const Baseline: React.FC<{}> = () => {
  return (
    <Inline alignItems="flex-start">
      {Object.keys(headingConfig).map((level: any) => (
        <Box key={level}>
          {new Array(3).fill(undefined).map((_, index) => (
            <Heading key={index} baseline level={level}>
              Baseline Heading
            </Heading>
          ))}
        </Box>
      ))}
    </Inline>
  )
}
