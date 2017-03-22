$(document).ready(function(){
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  $.ajax('http://localhost:8080/verification/verify', {
    xhrFields: {
      withCredentials: true
    },
    method: "GET",
    crossDomain: true
  }).done(function(data){
    alert("success");
  }).fail(function(err){
    console.log(err)
    // alert("failed");
  })
})
