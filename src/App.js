// import logo from './logo.svg';
import React, { useEffect } from ' react '
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function App () {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser)

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  // const [{ user }, dispatch] = useStateValue();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // the user is logged in...

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out ...
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  //   return () => {
  //     // Any cleanup operations go in here...
  //     unsubscribe();
  //   };
  // }, []);

  console.log('USER IS >>> ', user)

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <h1>Checkout</h1>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/FAQ'>
            <h1>FAQ</h1>
          </Route>
          {/* This is the default route, BOTTOM ONE IS ALWAYS HOME PAGE */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
