import React from 'react'
import $ from 'jquery'
import './Pretraining'
import './symptom.css'
function my_confirm () {
  window.location.href = '/?'
}

function Result () {
  function again () {
    window.location.href = 'Pretraining?radio='
  }

  function getUrlParam (name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
  function showResult () {
    const answer = ['B', 'D', 'A', 'A', 'D', 'ABCD', 'ABCD']
    const answer_score = [12, 12, 12, 12, 12, 20, 20]
    const user_answer = JSON.parse(getUrlParam('json'))
    const radio_num = parseInt(getUrlParam('radio'))
    // var checkbox_num = parseInt(getUrlParam("checkbox"));
    let radio_result = 0
    let checkbox_result = 0
    let radio_right_num = 0
    let checkbox_right_num = 0
    let result = 0
    const user_answer_result = new Array()
    for (i = 0; i < user_answer.length; i++) {
      if (user_answer[i] == answer[i]) {
        if (i < radio_num) {
          radio_result = radio_result + answer_score[i]
          radio_right_num++
        } else {
          checkbox_result = checkbox_result + answer_score[i]
          checkbox_right_num++
        }
        user_answer_result[i] = 'True'
      } else {
        user_answer_result[i] = 'False'
      }
    }
    result = checkbox_result + radio_result
    // 结果展示
    let show_result1
    let show_result2
    let show_result3
    let show_result4
    let show_result5
    let show_result6
    show_result1 = 'Your result：'
    for (var i = 0; i < user_answer.length; i++) {
      show_result1 = show_result1 + (i + 1) + '：' + user_answer_result[i] + '；&nbsp;'
    }

    show_result3 = 'Number of correct answer in Part1：' + radio_right_num + '；&nbsp;Scores：' + radio_result
    show_result4 = 'Number of correct answer in Part2：' + checkbox_right_num + '；&nbsp;Scores：' + checkbox_result
    show_result5 = 'Number of wrong answers：' + (user_answer.length - radio_right_num - checkbox_right_num)
    show_result6 = ' Total score of this exam：' + result

    $('p#show_result1').html(show_result1)
    $('p#show_result2').html(show_result2)
    $('p#show_result3').html(show_result3)
    $('p#show_result4').html(show_result4)
    $('p#show_result5').html(show_result5)
    $('p#show_result6').html(show_result6)
    return true
  }

  return (
    <div>
      <h2>Congraduations！</h2>
      <hr />

      <h3 align='center'> <input type='button' className='sbu' onClick={again} value='Train again' />
        <input type='button' className='sbu' onClick={showResult} value='Show result' />
        <input type='button' className='sbu' onClick={my_confirm} value='Home Page' />
      </h3>

      <p align='center' id='show_result1' />
      <hr />
      <p align='center' id='show_result2' />
      <p align='center' id='show_result3' />
      <p align='center' id='show_result4' />
      <p align='center' id='show_result5' />
      <hr />
      <p align='center' id='show_result6' />

    </div>
  )
}

export default Result
