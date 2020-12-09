import React, { Component } from 'react'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

class PostFrom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',

      building: '',
      time: '',
      phone: '',
      NWC: '',
      Mudd: '',
      Bulter: '',
      LearnrHall: '',
      symptom: '',
      // startDate: new Date()
      msg: 'Please answer fllowing questions to get your pass!'

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

      Username: this.state.username,
      State: this.state.value,
      NWC: this.state.NWC,
      Mudd: this.state.Mudd,
      LearnrHall: this.state.LearnrHall,
      Bulter: this.state.Bulter,
      symptom: this.state.symptom

    }
    fetch('/dailypass/submit', {
      // post提交
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)// 把提交的内容转字符串
    })
      .then(res => res.json())
    // .then(data =>{console.log(data)})
      .then(e => this.setState({ msg: e.msg }))
  }

  my_confirm (msg) {
    // var json = getjson();

    if (msg === 'green') {
      window.location.href = '/greenpass'
    } else if (msg === 'yellow') {
      window.location.href = '/yellowpass'
    }
  }

  render () {
    const { msg } = this.state
    return (

      <form onSubmit={this.onSubmit.bind(this)}>
        {/* <div>
            <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      /> */}
        <div>Your pass: {msg}</div>

        <br />
        <br />

        <h1 align='center'>Form </h1>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div id='main'>

          <div className='kv-item'>

            <span className='kv-label'>
              <h2 align='center'>   <label className='text'>username：</label></h2>
            </span>

            <h3 align='center'>   <input type='text' name='username' align='center' className='tsl' placeholder='*Must fill it' autoFocus size='25' onChange={this.onChange.bind(this)} defaultValue={this.state.username} /></h3>

            <div className='container'>
              <h3 align='center'>   <label className='tsl'>Select the buildings you plan to go today.</label> </h3>
              <ul>
                <li><label>

                  Mudd:
                  <input
                    name='Mudd'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                    </label>
                </li>
                <li>  <label>
                  Bulter:
                  <input
                    name='Bulter'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                </label>
                </li>
                <li>
                  <label>
                    LearnrHall:
                    <input
                      name='LearnrHall'
                      type='checkbox'
                      checked={this.state.isGoing}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </li>

                <li>
                  <label>
                    NWC:
                    <input
                      name='NWC'
                      type='checkbox'
                      checked={this.state.isGoing}
                      onChange={this.handleInputChange}
                    />

                  </label>
                </li>

                <li>
                  <label>
                    Others:
                    <input
                      name='Others'
                      type='checkbox'
                      checked={this.state.isGoing}
                      onChange={this.handleInputChange}
                    />

                  </label>
                </li>
              </ul>

            </div>

            <br />
            <h3 align='center'> <label className='tsl'>Select the state you have visited in the past 14 days.</label></h3>
            <br />

            <h3 align='center'>     <select value={this.state.value} onChange={this.handleChange}>
              <option name='State'>State</option>
              <option name='State' value='alabama'>alabama</option>
              <option name='State' value='alaska'>alaska</option>
              <option name='State' value='arizona'>arizona</option>
              <option name='State' value='arkansas'>arkansas</option>
              <option name='State' value=' california'>california</option>
              <option name='State' value=' colorado'> colorado</option>
              <option name='State' value='delaware'>delaware</option>
              <option name='State' value=' florida'> florida</option>
              <option name='State' value='georgia'>georgia</option>
              <option name='State' value=' hawaii'> hawaii</option>
              <option name='State' value=' idaho '> idaho </option>
              <option name='State' value='illinois '>illinois </option>
              <option name='State' value=' indiana '>  indiana</option>
              <option name='State' value=' iowa'>iowa </option>
              <option name='State' value=' kansas'> kansas</option>
              <option name='State' value='  kentucky'> kentucky </option>
              <option name='State' value=' louisiana '> louisiana </option>
              <option name='State' value=' maine'>maine </option>
              <option name='State' value=' maryland'> maryland</option>
              <option name='State' value=' massachusetts '>massachusetts </option>
              <option name='State' value='  michigan '> michigan </option>
              <option name='State' value='  minnesota '> minnesota </option>
              <option name='State' value='  mississippi '>  mississippi</option>
              <option name='State' value=' missouri  '> missouri </option>
              <option name='State' value='  montana '> montana </option>
              <option name='State' value='  nebraska '> nebraska </option>
              <option name='State' value=' nevada  '> nevada </option>
              <option name='State' value=' new hampshire  '> new hampshire </option>
              <option name='State' value=' new jersey  '> new jersey </option>
              <option name='State' value='new mexico  '> new mexico</option>
              <option name='State' value=' new york  '> new york </option>
              <option name='State' value=' north carolina  '> north carolina </option>
              <option name='State' value=' north dakota  '> north dakota </option>
              <option name='State' value=' ohio '>ohio </option>
              <option name='State' value='  oklahoma '> oklahoma </option>
              <option name='State' value=' oregon '> oregon</option>
              <option name='State' value='  pennsylvania '> pennsylvania </option>
              <option name='State' value='  rhode island '>  rhode island</option>
              <option name='State' value=' south carolina '> south carolina</option>
              <option name='State' value='  south dakota '>  south dakota</option>
              <option name='State' value='  tennessee '> tennessee </option>
              <option name='State' value='  texas '>  texas</option>
              <option name='State' value=' utah  '> utah </option>
              <option name='State' value='  vermont '> vermont </option>
              <option name='State' value='  virginia '> virginia </option>
              <option name='State' value='   washington'>  washington</option>
              <option name='State' value='  west virginia '> west virginia </option>
              <option name='State' value='  wisconsin '>  wisconsin</option>
              <option name='State' value='  wyoming '> wyoming </option>

            </select>
            </h3>
            <br />

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
                  symptom:
                  <input
                    name='symptom'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              {/* <li> <input name="symptom"  type="checkbox" onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Fever／chills</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Cough</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Shortness of breath</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Fatigue</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Muscle or body aches</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Headache</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Loss of taste/smell</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Sore throat</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Congestion／runny nose</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Nausea／vomiting</li>
                <li><input name="symptom" type="checkbox"onChange={this.onChange.bind(this)} defaultValue={this.state.symptom}/>Diarrhea </li> */}

            </div>

            {/*
                <input type='button' className='btnAdd' value='Add'/>

                <div id="father">
                <form action="<%=request.getContextPath()%>/testServlet" method="post" name="conform" className="conform">
                <fieldset>

                 {/* <select value={this.state.value} onChange={this.handleChange}>
                   <option value="Time">Time</option>

                   <option value="06:00~12:00"onChange={this.onChange.bind(this)} defaultValue={this.state.time}>06:00~12:00</option>

                   <option value="12:00~18:00"onChange={this.onChange.bind(this)} defaultValue={this.state.time}>12:00~18:00</option>

                   <option value="18:00~24:00"onChange={this.onChange.bind(this)} defaultValue={this.state.time}>18:00~24:00</option>

                   </select> */}
            {/* <input type='button' className='btnDel' value='Delete' /> */}
            {/* </fieldset> */}

          </div>

          {/* <div className="kv-item">
                <span className="kv-label">
                 <label className="tsl">phone：</label>
                </span>
                 <input type="text" name="phone" className="tsl"  placeholder="*Must fill it" size="25" title="手机号码" onChange={this.onChange.bind(this)} defaultValue={this.state.phone}/>
               </div>
            */}
          <div className='kv-item'>
            <h3 align='center'>
              <button type='submit' className='sbu' value='Submit'>Submit</button>
              <input type='button' className='sbu' onClick={this.my_confirm(msg)} value='Get a pass' />
            </h3>
          </div>
        </div>

      </form>

    )
  }
}
export default PostFrom
