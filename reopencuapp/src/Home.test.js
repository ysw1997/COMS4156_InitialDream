import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

// describe(' Simple Snapshot Test', () => {
//   test('Testing square', () => {
//       let tree = create(<BrowserRouter><Home/></BrowserRouter>);
//       expect(tree.toJSON()).toMatchSnapshot();
//   })
// })
