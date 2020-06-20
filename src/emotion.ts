import createEmotion from 'create-emotion'
import type { Emotion } from 'create-emotion'

interface CreateEmotionConfig {
  key: string
  container?: HTMLElement
}

function createEmotionInstance(): Emotion {
  const config: CreateEmotionConfig = {
    key: 'fwego'
  }

  if (typeof document !== 'undefined') {
    config.container = document.createElement('div')
    const head = document.head
    head.insertBefore(config.container, head.firstChild)
  }

  return createEmotion(config)
}

const emotion = createEmotionInstance()

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache
} = emotion

export default emotion
