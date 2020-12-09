import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

test('jumps to the auth page after click log in', () => {
  render(<BrowserRouter><Login /></BrowserRouter>)
  const button = screen.getByText(/Sign In/i)
  button.click()
  expect(window.location.pathname).toBe('/')
})

test('jumps to the auth page after click log in', () => {
  render(<BrowserRouter><Login /></BrowserRouter>)
  const button = screen.getByText(/Create your Account/i)
  button.click()
  expect(window.location.pathname).toBe('/')
})
