import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function to () {
  const searchValue = document.getElementById('searchInput').value
  // alert(searchValue);
  window.open('http://google.com/search?q=' + searchValue)
}
function to1 () {
  window.open('http://google.com/search?q=nearby hospitals')
}
function Header () {
  // const [{ basket, user }, dispatch] = useStateValue();
  // // console.log(basket);

  // const handleLogin = () => {
  //     if (user) {
  //         auth.signOut();
  //     }
  // };

  const [{ user }] = useStateValue()
  // console.log(basket);

  const handleLogin = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (

    <nav className='header'>

      <Link to='/'>
        <img
          className='header_logo'
          src='logo.png'
          alt=''
        />
      </Link>
      <div className='header_search'>
        <input id='searchInput' type='text' className='header_searchInput' />
        <button onClick={to}>   <SearchIcon className='header_searchIcon' /></button>
      </div>

      <div className='header_nav'>
        <Link to={!user && '/login'} className='header_link'>
          <div onClick={handleLogin} className='header_option'>
            <span className='hospital'>Hello {!user ? 'Guest' : user.email}</span>

            <span className='hospital'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option '>
            <button className='hospital' onClick={to1}> <span className='header_optionLineThree'>Nearby Hospitals </span></button>
          </div>
        </Link>

      </div>
    </nav>

  )
}

export default Header
