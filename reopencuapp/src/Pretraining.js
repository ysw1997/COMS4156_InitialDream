import React, { Component } from 'react'
import './symptom.css'
import $ from 'jquery'

function getjson () {
  const radio = new Array()
  for (var i = 1; i <= 5; i++) {
    const radio_name = new String('radio_' + i)
    radio[i - 1] = $('input:radio[name=' + radio_name + ']:checked').val()
  }
  for (i = 1; i <= 2; i++) {
    const checkbox_name = new String('checkbox_' + i)
    var chk_value = []
    $('input:checkbox[name=' + checkbox_name + ']:checked').each(function () {
      chk_value.push($(this).val())
    })
    radio[i + 4] = ''
    for (let j = 0; j < chk_value.length; j++) {
      radio[i + 4] = radio[i + 4] + chk_value[j]
    }
  }
  const json = JSON.stringify(radio)
  return json
}

function my_confirm1 () {
  const json = getjson()
  const msg1 = 'Your answer is：' + json + ',Sure to submit'
  if (confirm(msg1) == true) {
    window.location.href = 'Result?radio=' + 5 + 'checkbox=' + 2 + '&json=' + json
  } else {
    return false
  }
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
        <span className='kv-label'>
          <h2 align='center'>   <label className='text'>username：</label></h2>
        </span>

        <h3 align='center'>   <input type='text' name='username' align='center' className='tsl' placeholder='*Must fill it' autoFocus size='25' onChange={this.onChange.bind(this)} defaultValue={this.state.username} /></h3>

        <h3 align='center'>Pretraining Exam</h3>
        <h4 align='center'>   Part1 Multiple Choice (Only one answer is correct)</h4>
        1.Which is the right social distance
        <div className='container'>
          <ul>
            <li><input type='radio' name='radio_1' value='A' />A、At least 4 feet</li>
            <li><input type='radio' name='radio_1' value='B' />B、At least 6 feet</li>
            <li><input type='radio' name='radio_1' value='C' />C、At least 8 feet</li>
            <li><input type='radio' name='radio_1' value='D' />D、At least 10 feet</li>
          </ul>
        </div>

        2.How does weather seem to affect the novel coronavirus?
        <div className='container'>
          <ul>
            <li><input type='radio' name='radio_2' value='A' />A、The virus can’t survive in hot, humid climates.
            </li>
            <li><input type='radio' name='radio_2' value='B' />B、Cold temperatures can kill the virus. </li>
            <li><input type='radio' name='radio_2' value='C' />C、Virus can survive in all environmentss</li>
            <li><input type='radio' name='radio_2' value='D' />D、It is not yet known.</li>
          </ul>
        </div>
        3.Which is the right gesture to wear a mask?
        <div className='mask_row'>
          <div className='container1'>
            <ul>
              <input type='radio' name='radio_3' value='A' />  A<img src='mask1.jpeg' />
            </ul>
          </div>
          <div className='container1'>
            <ul>
              <input type='radio' name='radio_3' value='B' />  B<img src='mask2.jpeg' />
            </ul>
          </div>
          <div className='container1'>
            <ul>
              <input type='radio' name='radio_3' value='C' />  C<img src='mask3.jpeg' />
            </ul>
          </div>
          <div className='container1'>
            <ul>
              <input type='radio' name='radio_3' value='D' />  D<img src='mask4.jpeg' />
            </ul>
          </div>
        </div>

        4.How is COVID-19 passed on??
        <div className='container'>
          <ul>
            <li><input type='radio' name='radio_4' value='A' />A、Through droplets from mouth/nose when cough/breathe out.
            </li>
            <li><input type='radio' name='radio_4' value='B' />B、
              In sexual fluids(semen, vaginal fluids or anal mucous).
            </li>
            <li><input type='radio' name='radio_4' value='C' />C、
              By drinking unclean water.
            </li>
            <li><input type='radio' name='radio_4' value='D' />D、
              All of the above.
            </li>
          </ul>
        </div>

        5.How long can the virus live outside the body??
        <div className='container'>
          <ul>
            <li><input type='radio' name='radio_5' value='A' />A、24hours</li>
            <li><input type='radio' name='radio_5' value='B' />B、36hours</li>
            <li><input type='radio' name='radio_5' value='C' />C、48hours</li>
            <li><input type='radio' name='radio_5' value='D' />D、72hours</li>
          </ul>
        </div>

        <h4 align='center'>  Part2 Multiple Choice (More than one answer is correct)</h4>
        6.What are the symptoms of someone infected with a coronavirus?
        <div className='container'>
          <ul>
            <li><input type='checkbox' name='checkbox_1' value='A' />A、Breathing difficulties</li>
            <li><input type='checkbox' name='checkbox_1' value='B' />B、Pneumonia</li>
            <li><input type='checkbox' name='checkbox_1' value='C' />C、Fever</li>
            <li><input type='checkbox' name='checkbox_1' value='D' />D、Severe acute respiratory syndrome</li>
          </ul>
        </div>
        7.What can you do to protect yourself?
        <div className='container'>
          <ul>
            <li><input type='checkbox' name='checkbox_2' value='A' />A、Separate yourself from others</li>
            <li><input type='checkbox' name='checkbox_2' value='B' />B、Monitor your symptoms</li>
            <li><input type='checkbox' name='checkbox_2' value='C' />C、Cover your coughs and sneezes</li>
            <li><input type='checkbox' name='checkbox_2' value='D' />D、Clean your hands often</li>
          </ul>
        </div>

        <h3 align='center'>
          <button type='submit' className='sbu' onClick={my_confirm1} value='Submit'>Submit</button>

          {/* <input type="button" className= "sbu" onClick = {my_confirm1}    value="Show Result"></input>  */}

        </h3>

      </form>

    )
  }
}
export default PostFrom
