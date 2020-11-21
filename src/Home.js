import React from 'react'
import './Home.css'
import Product from './Product'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='home_image'>

      <img
        src='home.jpg'
        alt=''
      />

      <div className='home_row'>
        <Link to='/getapass' className='header_link'>
          <Product
            title='GetAPass'
            image='getapass.jpeg'
          />
        </Link>
        <Link to='/pretraining' className='header_link'>
          <Product
            title='Pre Training'
            image='pretraining.jpeg'
          />
        </Link>
        <Link to='/personalcenter' className='header_link'>
          <Product
            title='Personal Center'
            image='PersonalCenter.jpg'
          />
        </Link>
        <Link to='/Inpersoncourses' className='header_link'>
          <Product
            title='Inperson Courses'
            image='logo512.png'
          />
        </Link>

      </div>
    </div>
  )
}

export default Home
