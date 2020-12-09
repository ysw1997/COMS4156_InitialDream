import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Pretraining from './Pretraining'
import { render, screen } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Pretraining />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

// test("jumps to the page after click the button"", () => {
//     render(<BrowserRouter ><Pretraining /></BrowserRouter >);
//     const button = screen.getByText(/Show Result/i);
//     button.click();
//     expect(window.location.pathname).toBe('/');
//   });
