var heroku = 'http://localhost:8000'
var server = heroku

$(document).ready(function(){
  $('.logout').click(function(){
    $.get(`${server}/verification/logout`)
      .then( () => {
        alert("successfully logged out")
      })
      .catch(err => {
        alert("there was an error logging out")
      })
  })
})
