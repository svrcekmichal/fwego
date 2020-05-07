import React from 'react'
import { FWThemeProvider } from '../../models'
import { Box, Heading, Inline } from '../'
import { headingConfig } from './Heading'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Heading,
  title: 'Heading',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return (
    <>
      {Object.keys(headingConfig).map((level: any) => {
        return (
          <Heading key={level} level={level}>
            Level {level} Heading
          </Heading>
        )
      })}
    </>
  )
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

export const FWTheme: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
      {Object.keys(headingConfig).map((level: any) => {
        return (
          <Heading key={level} level={level}>
            Level {level} Heading
          </Heading>
        )
      })}
    </FWThemeProvider>
  )
}

export const FWThemeBaseline: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
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
    </FWThemeProvider>
  )
}
