import React from 'react'
import { useTheme } from '../../hooks'
import { FWThemeProvider } from '../../models'
import { Text } from '../'

export default {
  component: Text,
  title: 'Text'
}

const TextGrid: React.FC<{}> = () => {
  const theme = useTheme()
  return (
    <>
      {Object.entries(theme.fontSizes)
        .slice()
        .reverse()
        .map(([size, px]: any) => {
          return (
            <Text key={size} size={size}>
              Text size {size} {px}
            </Text>
          )
        })}
    </>
  )
}

export const Default: React.FC<{}> = () => {
  return <TextGrid />
}

export const FWTheme: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
      <TextGrid />
    </FWThemeProvider>
  )
}
