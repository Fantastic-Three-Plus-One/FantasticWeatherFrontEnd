// var heroku =
var server = 'http://localhost:8000'
// var server = 'https://fantastic-weather.herokuapp.com'

$(document).on('click','.test-email-btn', function () {
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  var mail = {
    to: 'faisonusmc@gmail.com',
    text: 'Weather looks great today for your hike!'
  }

  $.post(`${server}/mailgun`, mail, function (result) {
    console.log(result);
  })
})
