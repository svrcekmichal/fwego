export interface Overflows {
  visible: string
  hidden: string
  scroll: string
  auto: string
}

export type Overflow = keyof Overflows

const overflows: Overflows = {
  visible: 'visible',
  hidden: 'hidden',
  scroll: 'scroll',
  auto: 'auto'
}

export default overflows
