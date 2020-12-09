import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Yellowpass from './yellowpass'
import { render, screen } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Yellowpass />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

test('jumps to the auth page after click log in', () => {
  render(<BrowserRouter><Yellowpass /></BrowserRouter>)
  const button = screen.getByText(/Home Page/i)
  button.click()
  expect(window.location.pathname).toBe('/')
})
