$(document).ready(function(){
  $.ajax('http://localhost:5280/verification/verify', {
    xhrFields: {
      withCredentials: true
    },
    method: "GET",
    crossDomain: true,
    beforeSend: function(xhr){
       xhr.withCredentials = true;
    }
  }).done(function(data){
    alert("success");
  }).fail(function(err){
    console.log(err)
    alert("failed");
  })
})
