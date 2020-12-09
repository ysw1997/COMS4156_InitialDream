import React, { Component } from 'react'
import './symptom.css'
function my_confirm () {
  window.location.href = '/?radio='
}

class PostFrom extends Component {
  constructor (props) {
    super(props)
    this.state = {

      username: ''

    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  onChange (e) { // 把当前修改的值赋入state
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit (e) {
    // 阻止事件传递
    e.preventDefault()
    // 把表单用的最终数据从state中提取出来,传入请求
    const post = {

      username: this.state.username
    }
    fetch('ocr/testuser', {
      // post提交
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)// 把提交的内容转字符串
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  render () {
    return (

      <form onSubmit={this.onSubmit.bind(this)}>
        <span className='kv-label'>
          <h2 align='center'>   <label className='text'>username：</label></h2>
        </span>

        <h3 align='center'>   <input type='text' name='username' align='center' className='tsl' placeholder='*Must fill it' autoFocus size='25' onChange={this.onChange.bind(this)} defaultValue={this.state.username} /></h3>
        <h3 align='center'>

          <h3 align='center'>
            <button type='submit' className='sbu' value='Submit'>Submit</button>
            <input type='button' className='sbu' onClick={my_confirm} value='Home Page' />
          </h3>

        </h3>

      </form>

    )
  }
}
export default PostFrom
