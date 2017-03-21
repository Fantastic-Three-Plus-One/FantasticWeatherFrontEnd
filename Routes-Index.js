//************************ READ ************************

//** READ ALL LOCATIONS **
$.get(`${server}/locations`, ......)

//** READ ONE LOCATION **
$.get(`${server}/locations/${LOCATION.id}`, ......)

//** READ ALL ZIP CODES **
$.get(`${server}/zipcodes`, ......)

//** READ ONE ZIP CODE **
$.get(`${server}/zipcodes/${ZIPCODE.id}`, ......)

//** READ ALL IDEALWEATHERS **
$.get(`${server}/idealWeather`, ......)

//** READ ONE IDEALWEATHER **
$.get(`${server}/idealWeather/${USERNAME.id}/${LOCATION.id}`, ......)


//************************ CREATE ************************
//** CREATE A LOCATION **
newLocation = {
  name: TODO,
  longitude: TODO,
  latitude: TODO,
  zipcode_id: TODO
}
$.post(`${server}/locations`, newLocation)

//** CREATE A IDEALWEATHER **
newIdealWeather = {
  username_id: TODO,
  location_id: TODO,
  temp_max: TODO,
  temp_min: TODO,
  wind_max: TODO,
  percip_max: TODO
}
$.post(`${server}/idealWeather`, newIdealWeather)


//************************ UPDATE ************************
//** UPDATE A LOCATION **
updatedLocation = {
  name: TODO
}
$.ajax({
  url: `${server}/locations/${LOCATION.id}`,
  type: 'PUT',
  data: updatedLocation,
  success: function (result) {
    console.log('Location successfully updated')
  },
  error: function (result) {
    console.log('Something went wrong when trying to update location')
  }
})

//** UPDATE AN IDEALWEATHER **
updatedIdealWeather = {
  temp_max: TODO,
  temp_min: TODO,
  wind_max: TODO,
  percip_max: TODO
}
$.ajax({
  url: `${server}/idealWeather/${USERNAME.id}/${LOCATION.id}`,
  type: 'PUT',
  data: updatedIdealWeather,
  success: function (result) {
    console.log('idealWeather successfully updated')
  },
  error: function (result) {
    console.log('Something went wrong when trying to update idealWeather')
  }
})


//************************ DELETE ************************
//** DELETE A LOCATION
$.ajax({
  url: `${server}/locations/${LOCATION.id}`,
  type: 'DELETE',
  success: function (result) {
    console.log('Location successfully deleted')
  },
  error: function (result) {
    console.log('Something went wrong when trying to delete location');
  }
})

//** DELETE AN IDEALWEATHER
$.ajax({
  url: `${server}/idealWeather/${USERNAME.id}/${LOCATION.id}`,
  type: 'DELETE',
  success: function (result) {
    console.log('idealWeather successfully deleted')
  },
  error: function (result) {
    console.log('Something went wrong when trying to delete idealWeather');
  }
})
