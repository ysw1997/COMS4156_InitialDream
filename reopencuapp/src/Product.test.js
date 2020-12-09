import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Product from './Product'
import { render, screen } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Product />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
