function sendJSON () {
  const result = document.querySelector('.result')
  const name = document.querySelector('#name')
  const email = document.querySelector('#email')

  // Creating a XHR object
  const xhr = new XMLHttpRequest()
  const url = 'reveier.php'

  // open a connection
  xhr.open('POST', url, true)

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader('Content-Type', 'application/json')

  // Create a state change callback
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Print received data from server
      result.innerHTML = this.responseText
    }
  }

  // Converting JSON data to string
  const data = JSON.stringify({ name: name.value, email: email.value })

  // Sending data with the request
  xhr.send(data)
}
