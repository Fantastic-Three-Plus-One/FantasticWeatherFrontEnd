var hikeId
var username_id

var dev = 'https://fantasticweatherfrontend.firebaseapp.com'
var heroku = 'https://fantastic-weather.herokuapp.com'
//redefine as need be for testing and production
var server = heroku

$(document).ready(function() {
    //  console.log('linked');

 hikeId = getUrlParameter('id');
console.log(hikeId);
 $.get(`${server}/locations/${hikeId}`, (data)  => {
    console.log(data);
    $('#hikeName').val(`${data[0].name}`)
 })


   $.get(`${server}/idealWeather/${1}/${hikeId}`, (data) => {
    console.log(data);
    $('#maxTemp').val(`${data[0].temp_max}`);
    $('#minTemp').val(`${data[0].temp_min}`);
    $('#wind_max').val(`${data[0].wind_max}`)
    $('#percip_max').val(`${data[0].percip_max}`);

     username_id = data[0].username_id;
     console.log(username_id);
   })




});

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  // var returner;

  sURLVariables.forEach((paraName) => {
    const sParameterName = paraName.split('=');
    if (sParameterName[0] === sParam) {
      returner = sParameterName[1] === undefined ? false : sParameterName[1];
    }
  });
  // console.log('id:', returner);
  return returner
}



$(document).on('click','.name-submit', ()=>{
     var nameUpdate = {name:$('#hikeName').val()};
     console.log(nameUpdate);
     $.ajax({
       url: `${server}/locations/${hikeId}`,
       type: 'PUT',
       data: nameUpdate,
       success: function (result) {
         console.log('Location successfully updated')
       },
       error: function (result) {
         console.log('Something went wrong when trying to update location')
       }
     })
})


$(document).on('click','.info-submit', ()=>{





    var updatedIdealWeather = {
       temp_max: $('#maxTemp').val(),
       temp_min: $('#minTemp').val(),
       wind_max: $('#wind_max').val(),
       percip_max: $('#percip_max').val()
     }

     console.log(updatedIdealWeather);
     $.ajax({
       url: `${server}/idealWeather/${username_id}/${hikeId}`,
       type: 'PUT',
       data: updatedIdealWeather,
       success: function (result) {
         console.log('idealWeather successfully updated')
       },
       error: function (result) {
         console.log('Something went wrong when trying to update idealWeather')
       }
     })


})
