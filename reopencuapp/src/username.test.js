import React from 'react'
import Square from './username'
import { create } from 'react-test-renderer'

describe('Square Simple Snapshot Test', () => {
  test('Testing square', () => {
    const tree = create(<Square />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('Square className is affected by isWinningSquare prop', () => {
  test('props.isWinningSquare is false, className should be "square"', () => {
    const tree = create(<Square isWinningSquare={false} />)

    expect(tree.root.findByType('button').props.className).toEqual('square')
  }),
  test('props.isWinningSquare is true, className should be "square winning-square"', () => {
    const tree = create(<Square isWinningSquare />)

    expect(tree.root.findByType('button').props.className).toEqual('square winning-square')
  })
})

test('props.onClick is called when button is clicked', () => {
  const fn = jest.fn()
  const tree = create(<Square onClick={fn} />)
  // Simulate button click
  const button = tree.root.findByType('button')
  button.props.onClick()
  // Verify callback is invoked
  expect(fn.mock.calls.length).toBe(1)
})

describe('Square Simple Snapshot Test', () => {
  test('Testing square', () => {
    const tree = create(<Square />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('Square className is affected by isWinningSquare prop', () => {
  test('props.isWinningSquare is false, className should be "square"', () => {
    const tree = create(<Square isWinningSquare={false} />)

    expect(tree.root.findByType('button').props.className).toEqual('square')
  }),
  test('props.isWinningSquare is true, className should be "square winning-square"', () => {
    const tree = create(<Square isWinningSquare />)

    expect(tree.root.findByType('button').props.className).toEqual('square winning-square')
  })
})

test('props.onClick is called when button is clicked', () => {
  const fn = jest.fn()
  const tree = create(<Square onClick={fn} />)
  // Simulate button click
  const button = tree.root.findByType('button')
  button.props.onClick()
  // Verify callback is invoked
  expect(fn.mock.calls.length).toBe(1)
})
