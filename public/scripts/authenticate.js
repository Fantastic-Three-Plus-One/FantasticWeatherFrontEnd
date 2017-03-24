// var server = 'http://fantastic-weather.herokuapp.com'
var server = 'http://localhost:8000'

$(document).ready(function(){
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  $.ajax(`${server}/verification/verify`, {
    xhrFields: {
      withCredentials: true
    },
    method: "GET",
    crossDomain: true
  }).done(function(data){
    // alert("success");
  }).fail(function(err){
    console.log(err)
    // alert("failed");
  })
})
