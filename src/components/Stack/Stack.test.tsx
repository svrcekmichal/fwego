import React from 'react'
import { render } from '@testing-library/react'
import { Stack } from './Stack'

test('it renders a stack with medium space by default', () => {
  const { container } = render(
    <Stack>
      <div>1</div>
      <div>2</div>
    </Stack>
  )

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      display: block;
      box-sizing: border-box;
      min-width: 0px;
    }

    .emotion-0 > *:not(:last-child) {
      margin-bottom: 16px;
    }

    <div>
      <div
        class="emotion-0"
      >
        <div>
          1
        </div>
        <div>
          2
        </div>
      </div>
    </div>
  `)
})

test('it changes space between children with the space prop', () => {
  const { container } = render(
    <Stack space="small">
      <div>1</div>
      <div>2</div>
    </Stack>
  )

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      display: block;
      box-sizing: border-box;
      min-width: 0px;
    }

    .emotion-0 > *:not(:last-child) {
      margin-bottom: 12px;
    }

    <div>
      <div
        class="emotion-0"
      >
        <div>
          1
        </div>
        <div>
          2
        </div>
      </div>
    </div>
  `)
})
