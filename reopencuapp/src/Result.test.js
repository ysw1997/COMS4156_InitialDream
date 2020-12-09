import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Result from './Result'
import { render, screen } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Result />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

test('jumps to the page after click the button', () => {
  render(<BrowserRouter><Result /></BrowserRouter>)
  const button = screen.getByText(/Home Page/i)
  button.click()
  expect(window.location.pathname).toBe('/')
})

test('jumps to the page after click the button', () => {
  render(<BrowserRouter><Result /></BrowserRouter>)
  const button = screen.getByText(/Train again/i)
  button.click()
  expect(window.location.pathname).toBe('/')
})
