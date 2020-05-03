import React from 'react'
import { Input } from '../'

export default {
  component: Input,
  title: 'Input'
}

export const Default: React.FC<{}> = () => {
  return <Input placeholder="A placeholder" />
}
