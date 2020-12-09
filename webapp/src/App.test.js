import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
