import React from 'react'
import './PCHome.css'
import Product from './Product'
import './Product.css'
function PCHome () {
  return (

    <div className='home_row'>

      <Product
        title='quarantinen'
        image='pretraining.jpeg'
      />

      <Product
        title='Health Record'
        image='PersonalCenter.jpg'
      />

      <Product
        title='Inperson Courses'
        image='file-upload-icon.png'
      />

    </div>

  )
}

export default PCHome
