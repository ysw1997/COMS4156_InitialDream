// import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Header2 from './Header2'
import Login from './Login'
import Home from './Home'
// import PCHome from './PCHome';
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import Form from './Form'
import Pretraining from './Pretraining'
import Result from './Result'
import Greenpass from './greenpass'
// import { PostRequest } from './test1';
import File from './file'
import Yellowpass from './yellowpass'
import Quan from './quanform'
// import Fileuser from "./fileuser"

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

          <Route path='/greenpass'>

            <Greenpass />
          </Route>

          <Route path='/yellowpass'>

            <Yellowpass />
          </Route>

          <Route path='/checkout'>
            <h1>Checkout</h1>
          </Route>

          <Route path='/login'>
            <Header2 />
            <Login />
          </Route>

          <Route path='/getapass'>
            <Header />

            <Form />
          </Route>

          <Route path='/Result'>
            <Header />
            <Result />
          </Route>

          <Route path='/Form'>
            <Header />
            <Form />
          </Route>

          <Route path='/greenpass'>
            <Header />
          </Route>

          <Route path='/pretraining'>

            <Header />
            <Pretraining />

          </Route>

          <Route path='/inpersoncourses'>
            <Header />

          </Route>

          <Route path='/file'>
            <Header />

            <File />
            {/* <Fileuser /> */}

          </Route>

          <Route path='/quanform'>
            <Header />
            <Quan />
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
