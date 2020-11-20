import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import index from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <index />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
