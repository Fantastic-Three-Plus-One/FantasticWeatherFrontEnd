$(document).on('click','.test-email-btn', function () {

  newEmail = 'This is a test email'

  $.ajax({
    type: "POST",
    beforeSend: function(request) {
      request.setRequestHeader("X-FullContact-APIKey", '60913fa587d09c69');
    },
    url: "https://api.fullcontact.com/v2/person.json?email=faisonusmc@gmail.com",
    data: newEmail,
    processData: false,
    success: function(msg) {
      console.log('It worked?');
      $("#results").append("The result =" + StringifyPretty(msg));
    }
  })
})
