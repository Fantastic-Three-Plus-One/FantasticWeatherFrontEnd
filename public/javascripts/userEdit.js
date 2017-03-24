var locationId
var username_id

// var dev = 'https://fantasticweatherfrontend.firebaseapp.com'
var heroku = 'https://fantastic-weather.herokuapp.com'
// var server = 'http://localhost:8000'
var server = heroku

$(document).ready(function() {

  locationId = getUrlParameter('id')
  console.log(locationId)
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  $.get(`${server}/idealWeather/user/${locationId}`, (data)  => {
    console.log(data)
    $('#hikeName').val(`${data[0].name}`)
    $('#maxTemp').val(`${data[0].temp_max}`)
    $('#minTemp').val(`${data[0].temp_min}`)
    $('#wind_max').val(`${data[0].wind_max}`)
    $('#percip_max').val(`${data[0].percip_max}`)
  })
  // $.ajaxSetup({xhrFields: { withCredentials: true } })
  // $.get(`${server}/idealWeather/${1}/${hikeId}`, (data) => {
  //   console.log(data)
  //
  //
  //   username_id = data[0].username_id
  // })
})

$(document).on('click','.name-submit', ()=>{
  var nameUpdate = {name:$('#hikeName').val()}
  console.log(nameUpdate)
  if (nameUpdate.name === '') {
    alert('please enter a hike name')
  }
  else {
  $.ajaxSetup({xhrFields: { withCredentials: true } })
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
  }
})

$(document).on('click','.info-submit', ()=>{

  var updatedIdealWeather = {
    temp_max: $('#maxTemp').val(),
    temp_min: $('#minTemp').val(),
    wind_max: $('#wind_max').val(),
    percip_max: $('#percip_max').val()
  }
  console.log(updatedIdealWeather);

  if (updatedIdealWeather.temp_max === '') {
    alert('please enter a valid maximum tempature value')
  }
  else if (updatedIdealWeather.temp_min === '') {
    alert('please enter minimum tempature value')
  }
  else if (updatedIdealWeather.wind_max === '') {
    alert('please enter max windspeed value')
  }
  else if (updatedIdealWeather.percip_max === '') {
    alert('please enter a chance of rain value')
  }
  else {
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  $.ajax({
    url: `${server}/idealWeather/user/${locationId}`,
    type: 'PUT',
    data: updatedIdealWeather,
    success: function (result) {
    console.log('idealWeather successfully updated')
    },
    error: function (result) {
    console.log('Something went wrong when trying to update idealWeather')
    }
  })
  }
})

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1))
  const sURLVariables = sPageURL.split('&')
  // var returner

  sURLVariables.forEach((paraName) => {
    const sParameterName = paraName.split('=')
    if (sParameterName[0] === sParam) {
      returner = sParameterName[1] === undefined ? false : sParameterName[1]
    }
  })
  return returner
}
