import React from 'react'
import { Heading } from '..'
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
