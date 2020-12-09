import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
function Product ({ title, image }) {
  return (
    <div className='product'>
      <div className='product_info'>
        <p className='product_optionLineThree'>{title}</p>

        <img src={image} alt='' />

      </div>

    </div>
  )
}

export default Product
