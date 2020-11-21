// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Home from './Home';
// import { BrowserRouter } from 'react-router-dom';

// it('renders Home link', () => {
//   render(
//   <BrowserRouter>
//     <Home />)
//   </BrowserRouter>
//   );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

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
