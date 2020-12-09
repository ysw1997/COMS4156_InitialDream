import React from 'react'
import { render, screen } from '@testing-library/react'
import Quanform from './quanform'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Quanform />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

test('jumps to the auth page after click log in', () => {
  render(<BrowserRouter><Quanform /></BrowserRouter>)
  const button = screen.getByText(/Submit/i)
  button.click()
  expect(window.location.pathname).toBe('/')
})

test('jumps to the auth page after click log in', () => {
  render(<BrowserRouter><Quanform /></BrowserRouter>)
  const button = screen.getByText(/Home Page/i)
  button.click()
  expect(window.location.pathname).toBe('/')
})
