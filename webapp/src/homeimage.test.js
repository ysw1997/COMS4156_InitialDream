import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Homeimage from './homeimage'
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Homeimage />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
