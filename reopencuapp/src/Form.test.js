import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Form from './Form'
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

// test("jumps to the page after click the button", () => {
//   render(<BrowserRouter ><Form /></BrowserRouter >);
//   const button = screen.getByText(/Get a pass'/i);
//   button.click();
//   expect(window.location.pathname).toBe('/');
// });
