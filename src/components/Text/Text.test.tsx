import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { Text } from './Text'

test('it renders text content', () => {
  const text = 'test'
  const div = document.createElement('div')
  ReactDOM.render(<Text>{text}</Text>, div)
  expect(div.querySelector('span')).toHaveTextContent(text)
})

test('it uses default fwcss styles', () => {
  const { container } = render(<Text>test</Text>)

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      display: block;
      box-sizing: border-box;
      min-width: 0px;
      font-size: 16px;
    }

    <div>
      <span
        class="emotion-0"
      >
        test
      </span>
    </div>
  `)
})

test('it renders baseline text', () => {
  const { container } = render(<Text baseline>test</Text>)

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      line-height: 1;
      -webkit-transform: translateY(2px);
      -ms-transform: translateY(2px);
      transform: translateY(2px);
      display: block;
      box-sizing: border-box;
      min-width: 0px;
      font-size: 16px;
    }

    .emotion-0:before {
      content: '';
      display: block;
      height: 0px;
      margin-top: -5px;
    }

    <div>
      <span
        class="emotion-0"
      >
        test
      </span>
    </div>
  `)
})

test('it renders different baseline styles based on size prop', () => {
  const { container } = render(
    <Text baseline size="xxlarge">
      test
    </Text>
  )

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      line-height: 1;
      -webkit-transform: translateY(5px);
      -ms-transform: translateY(5px);
      transform: translateY(5px);
      display: block;
      box-sizing: border-box;
      min-width: 0px;
      font-size: 32px;
    }

    .emotion-0:before {
      content: '';
      display: block;
      height: 0px;
      margin-top: -10px;
    }

    <div>
      <span
        class="emotion-0"
      >
        test
      </span>
    </div>
  `)
})
