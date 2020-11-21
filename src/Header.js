import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function Header () {
  const [{ basket, user }] = useStateValue()
  // console.log(basket);

  const handleLogin = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='CU_logo.png'
          alt=''
        />
      </Link>

      <div className='header_search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && '/login'} className='header__link'>
          <div onClick={handleLogin} className='header__option'>
            <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to='/introduction' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Health Code</span>
            <span className='header__optionLineTwo'>FAQ</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Profile</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            {/* bascket icon */}
            <ShoppingBasketIcon />
            {/* Number of items */}
            <span className='header__optionLineTwo header__basket'>{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
