import React from 'react'
import './greenpass.css'

function greenpass () {
  function my_confirm () {
    window.location.href = '/?'
  }
  return (
    <div>     <nav className='greenpass'>
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
          <h3 align='center'>Green Pass</h3>
        </div>
      </div>
    </nav>
      <h3 align='center'><input type='button' className='sbu' onClick={my_confirm} value='Home Page' /></h3>
    </div>

  )
}

export default greenpass
