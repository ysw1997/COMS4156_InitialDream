import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function Header () {
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
        <input type='test' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <Link to='/knowledge' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineThree'>FAQ</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option '>
            <span className='header_optionLineThree'>Nearby Hospitals </span>
          </div>
        </Link>

        <Link to='/login' className='header_link'>
          <div className='header_option '>
            <span className='header_optionLineThree'>Log Out</span>
          </div>
        </Link>

        <Link to='/donate ' className='header_link'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'> 💲💲💲</span>
          </div>
        </Link>
      </div>
    </nav>

  )
}

export default Header
