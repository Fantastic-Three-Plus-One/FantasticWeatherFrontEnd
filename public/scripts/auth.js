var server = 'https://fantastic-weather.herokuapp.com'

$(document).ready(function(){
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  $.support.cors = true;

  $(document).on("submit", ".submitRegistration", function(event) {
    event.preventDefault()
    var pass = $('.password').val();
    var passConfirm = $('.passwordConfirm').val();
    var newEmail = $('.emailRegister').val();
    if (!newEmail) {
      alert("you must enter an email")
    } else {
      if (!pass) {
        alert("you must enter a password")
      } else if (pass !== passConfirm) {
        alert("passwords must match")
      } else {
        var newUser = {
          email: newEmail,
          password: pass
        }
        // http:localhost:8080/verification/register
        //'https://fantastic-weather.herokuapp.com/verification/register

        $.ajax(`${server}/verification/register`, {

          method: 'POST',
          contentType: 'application/json',
          crossDomain: true,
          data: JSON.stringify(newUser)
        }).then(response => {
          // alert("New User Created!")
        })
      }
    }
  })

  $(document).on('submit', '.submitLogin', function(event) {
    event.preventDefault()
    var pass = $('.passwordLogin').val();
    var userEmail = $('.emailLogin').val();
    // alert(userEmail)
    // alert(pass)
    if (!userEmail) {
      alert("email must be filled in")
    } else {
      if (!pass) {
        alert("password must be filled in")
      } else {
        var returningUser = {
          email: userEmail,
          password: pass
        }
        //'https://fantastic-weather.herokuapp.com/verification
        $.ajaxSetup({xhrFields: { withCredentials: true } })
        $.post('http://localhost:8000/verification/login', returningUser).done(
          function(data) {
            // $.ajax('http://localhost:5280/verification/verify', {
            //   method: "GET",
            //   crossDomain: true
            // }).done(function(data){
            //   alert("SUCCESS!!!");
            // }).fail(function(err){
            //   console.log(err)
            //   alert("failed");
            // })
          // alert("you are logged in!")
          location.href = "/UserMain.html"
        }).fail(function(err){
          // alert("login information incorrect")
        })
      }
    }
  })
})
