import React from 'react'
import { render } from '@testing-library/react'
import { Inline } from './Inline'

test('it renders an inline row with medium space by default', () => {
  const { container } = render(
    <Inline>
      <div>1</div>
      <div>2</div>
    </Inline>
  )

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      margin-top: -16px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      box-sizing: border-box;
      min-width: 0px;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .emotion-0 > * {
      margin-top: 16px;
    }

    .emotion-0 > *:not(:last-child) {
      margin-right: 16px;
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
    <Inline space="small">
      <div>1</div>
      <div>2</div>
    </Inline>
  )

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      margin-top: -12px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      box-sizing: border-box;
      min-width: 0px;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .emotion-0 > * {
      margin-top: 12px;
    }

    .emotion-0 > *:not(:last-child) {
      margin-right: 12px;
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

test('it aligns children to a side with the align prop', () => {
  const { container } = render(
    <Inline align="right">
      <div>1</div>
      <div>2</div>
    </Inline>
  )

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      margin-top: -16px;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      box-sizing: border-box;
      min-width: 0px;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .emotion-0 > * {
      margin-top: 16px;
    }

    .emotion-0 > *:not(:first-child) {
      margin-left: 16px;
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
