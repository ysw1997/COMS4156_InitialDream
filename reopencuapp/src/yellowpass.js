import React from 'react'
import './yellowpass.css'

function yellowpass () {
  function my_confirm () {
    window.location.href = '/?'
  }
  return (
    <div>     <nav className='yellowpass'>
      <div className='container11'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className='header_link'>
          <h3 align='center'>Yellow Pass</h3>
        </div>
      </div>
    </nav>
      <h3 align='center'><input type='button' className='sbu' onClick={my_confirm} value='Home Page' /></h3>
    </div>

  )
}

export default yellowpass
