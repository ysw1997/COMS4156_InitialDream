// import React from 'react';
// import {render, screen} from '@testing-library/react';
// import Login from "./Login";

// jest.mock("react-firebaseui", () => ({
//     StyledFirebaseAuth: () => <div>Mock</div>,
// }));

// test("renders", async () => {
//     render(<Login/>);

//     const signIn = screen.queryByText(/Sign in/i);
//     expect(signIn).toBeInTheDocument();
// });
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
