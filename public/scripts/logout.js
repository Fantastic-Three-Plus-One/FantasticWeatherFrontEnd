

// var server = 'http://fantastic-weather.herokuapp.com'
var server = 'http://localhost:8000'

$(document).ready(function(){
  $('.logout').click(function(){
    $.get(`${server}/verification/logout`)
      .then( () => {
        // alert("successfully logged out")
        location.href = '/Index.html'
      })
      .catch(err => {
        alert("there was an error logging out")
      })
  })
})
