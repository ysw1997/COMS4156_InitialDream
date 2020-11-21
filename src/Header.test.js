import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

describe(' Simple Snapshot Test', () => {
  test('Testing square', () => {
    const tree = create(<BrowserRouter><Login /></BrowserRouter>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

it('onClick is called when button is clicked', () => {
  const fn = jest.fn()
  const tree = create(<BrowserRouter> <Login onClick={fn} /></BrowserRouter>)
  // Simulate button click
  const button = tree.root.findByType('button')
  button.props.onClick()
  // Verify callback is invoked
  expect(fn.mock.calls.length).toBe(1)
})
