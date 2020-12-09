import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div)
})

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
// <BrowserRouter>
//   <Header />
// </BrowserRouter>,
// div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// })

// describe(' Simple Snapshot Test', () => {
//     test('Testing square', () => {
//         let tree = create(<BrowserRouter><Header/></BrowserRouter>);
//         expect(tree.toJSON()).toMatchSnapshot();
//     })
// })
