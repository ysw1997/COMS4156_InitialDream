import React, { Component } from 'react'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

function my_confirm () {
  window.location.href = '/?'
}
class PostFrom extends Component {
  constructor (props) {
    super(props)
    this.state = {

      Agree: '',
      Goout: '',
      Symptom: ''
      // startDate: new Date()

    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  //   handleChange = date => {
  //     this.setState({
  //       startDate: date
  //     });
  //   };

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value

    })
  }
  // this.onChange = this.onChange.bind(this)

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

      Goout: this.state.Goout,
      Symptom: this.state.Symptom,
      Agree: this.state.Agree

    }
    fetch('/pretrain/pretrain', {
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
        {/* <div>
            <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      /> */}

        <br />
        <br />

        <h1 align='center'>Quarantine Form </h1>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div id='main'>

          <div className='kv-item'>

            <span className='kv-label'>
              <h2 align='center'>   <label className='text'>username：</label></h2>
            </span>

            <h3 align='center'>   <input type='text' name='username' align='center' ßclassName='tsl' placeholder='*Must fill it' autoFocus size='25' onChange={this.onChange.bind(this)} defaultValue={this.state.username} />

            </h3>

            <br />

            <div className='container'>

              <label className='tsl'>By clicking this, you agree to share your location.</label>
            </div>

            <div className='container'>
              <label>
                Agree:
                <input
                  name='Agree'
                  type='checkbox'
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>

            <div className='container'>

              <label className='tsl'>If you have at least one of the following symptom, please click the box.</label>
              <br />

              <div className='container'>
                <label className='tsl'>

                  Fever or chills
                  Cough
                  Shortness of breath or difficulty breathing
                  Fatigue
                  Muscle or body aches
                  Headache
                  New loss of taste or smell
                  Sore throat
                  Congestion or runny nose
                  Nausea or vomiting
                  Diarrhea
                </label>
              </div>

              <div className='container'>
                <label>
                  Symptom:
                  <input
                    name='Symptom'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div className='container'>

                <label className='tsl'>Have you even gone out today</label>
                <br />

                <div className='container'>
                  <label>
                    Goout:
                    <input
                      name='Goout'
                      type='checkbox'
                      checked={this.state.isGoing}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
              </div>

            </div>

          </div>

          <div className='kv-item'>
            <h3 align='center'>      <button type='submit' className='sbu' value='Submit'>Submit</button> <input type='button' className='sbu' onClick={my_confirm} value='Home Page' /></h3>
          </div>
        </div>

      </form>

    )
  }
}
export default PostFrom
