import React from 'react'
import './Home.css'
import Product from './Product'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <section>
      <div className='home_image'>

        <img
          src='home.jpg'
          alt=''
        />

      </div>
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
        <Link to='/quanform' className='header_link'>
          <Product
            title='Quarantine Form'
            image='mask-icon.jpg'
          />
        </Link>
        <Link to='/file' className='header_link'>
          <Product
            title='Upload Report'
            image='fileupload.jpg'
          />
        </Link>

      </div>
    </section>
  )
}

export default Home
