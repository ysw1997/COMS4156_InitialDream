import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header2 from './Header2'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Header2 />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
