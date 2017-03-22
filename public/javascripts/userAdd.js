var heroku = 'https://fantastic-weather.herokuapp.com'
var server = heroku

$(document).on('click','.newInfo-submit', ()=>{
  console.log('clicked!');
    var newLocation = {
       name: $('#hikeName').val(),
      //  these three items I do not have yet- need to link up gmaps first!
      //  longitude: $('#longitude').val(),
      //  latitude: $('#latitude').val(),
      //  zipcode: $('#zipcode').val()
     }

     $.post(`${server}/locations`, newLocation)
     .
     console.log(updatedIdealWeather);

     //** CREATE A IDEALWEATHER **
    //  newIdealWeather = {
    //    username_id:
    //    location_id:
    //    temp_max:
    //    temp_min:
    //    wind_max:
    //    percip_max:
    //  }
    //  $.post(`${server}/idealWeather`, newIdealWeather)

     })
