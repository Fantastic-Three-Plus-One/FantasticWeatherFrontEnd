$(document).on('click','.test-email-btn', function () {
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  var mail = {
    to: 'faisonusmc@gmail.com',
    text: 'Weather looks great today for your hike!'
  }

  $.post('/mailgun', mail, function (result) {
    console.log(result);
  })
})
