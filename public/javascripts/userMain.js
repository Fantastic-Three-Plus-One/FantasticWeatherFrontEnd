// var heroku = 'https://fantastic-weather.herokuapp.com'
var heroku = 'http://localhost:8000'
var server = heroku

$(document).ready(() => {
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  $.get(`${server}/locations/user`,(data) =>{
    if (data.length < 3) {
      for (var i = 0; i < data.length; i++) {
        $('.scrollmenu').append(`<div class="border userLocation text-center">
          <div class='xxx'>
            <h3 class="location">${data[i].name}</h3>
            <!-- potential gif load based on current weather ie sun, rain, clouds, windy- think yahoo weather! -->
            <canvas id="canvas${data[i].id}" width="150" height="150" value=${data[i].id}></canvas>
            <div class='location-info-main'>
              <div class="location-info temp${data[i].id}"></div>
              <div class="location-info precip${data[i].id}"></div>
              <div class="location-info wind${data[i].id}"></div>
            </div>
            <div>
              <div class="btn-group" role="group">
                <a href="userEdit.html?id=${data[i].id}"><button type="button" class="btn btn-default edit-btn">Edit</button></a>
              </div>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default delete-btn" id=${data[i].id}>Delete</button>
              </div>
            </div>
          </div>
        </div>`)
      }
    }

    else {
      for (var i = 0; i < data.length; i++) {
        $('.scrollmenu').append(`<div class="border userLocation">
          <div class='xxx'>
            <h3 class="location">${data[i].name}</h3>
            <!-- potential gif load based on current weather ie sun, rain, clouds, windy- think yahoo weather! -->
            <canvas id="canvas${data[i].id}" width="150" height="150" value=${data[i].id}></canvas>
            <div class='location-info-main'>
              <div class="location-info temp${data[i].id}"></div>
              <div class="location-info precip${data[i].id}"></div>
              <div class="location-info wind${data[i].id}"></div>
            </div>
            <div>
              <div class="btn-group" role="group">
                <a href="userEdit.html?id=${data[i].id}" class="btn btn-default edit-btn">Edit</a>
              </div>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default delete-btn" id=${data[i].id}>Delete</button>
              </div>
            </div>
          </div>
        </div>`)
      }
    }
  })
  .then( result => {
    console.log('result:');
    console.log(result);
    for (let j = 0; j < result.length; j++) {
      const myKey = 'fd59c08b71d9a82c1248b5012aca9c44'
      var getInfo = function(){
        //Grabs the longitude and latitude
        var myLongitude = parseFloat(result[j].longitude).toFixed(4)
        console.log(myLongitude);
        var myLatitude = parseFloat(result[j].latitude).toFixed(4)
        console.log(myLatitude);
        //Makes the request
        $.ajax({
          url : `https://api.darksky.net/forecast/${myKey}/${myLatitude},${myLongitude}?exclude=minutely,hourly,alerts,flags`,
          dataType : "jsonp",
          success : function(pJSON) {
            var skycons = new Skycons({"color": "black"})
            var WeatherIcon = pJSON.currently.icon
            var newWeatherIcon = WeatherIcon.replace(/-/g, '_').toUpperCase()
            skycons.add(`canvas${result[j].id}`, Skycons[newWeatherIcon])
            skycons.play()

            var myTemp = parseInt(pJSON['currently']['temperature']);
            var myPrecip = pJSON['daily']['data'][0]['precipProbability']
            var myWind = pJSON['daily']['data'][0]['windSpeed']
            $(`.temp${result[j].id}`).append(`<p>Temperature: </p><p>${myTemp}&deg;F</p>`)
            $(`.precip${result[j].id}`).append(`<p>Precipitation: </p><p>${myPrecip} %</p>`)
            $(`.wind${result[j].id}`).append(`<p>Wind: </p><p>${myWind} mph</p>`)
          }
        })
      }
      getInfo()
    }
  })
})

$(document).on('click','.delete-btn',function(){
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  var delId = $(this).attr('id');
  $.ajax({
    url: `${server}/locations/${delId}`,
    type: 'DELETE',
    success: function (result) {
      console.log('Location successfully deleted')
      location.reload();
    },
    error: function (result) {
      console.log('Something went wrong when trying to delete location');
    }
  })
})

$(document).on('click', 'canvas', function (event) {
  const myKey = 'fd59c08b71d9a82c1248b5012aca9c44'
  var locationID = $(event.target).attr('value')
  $.ajaxSetup({xhrFields: { withCredentials: true } })
  $.get(`${server}/locations/${locationID}`)
    .then(function (data) {
      var locLong = data[0].longitude
      var locLat = data[0].latitude
      var coordinates = {
        longitude: locLong,
        latitude: locLat
      }
      return coordinates
    }).then( result => {
      console.log(result);
      var myLongitude = result.longitude
      var myLatitude = result.latitude
      $.ajax({
        url : "https://api.darksky.net/forecast/" + myKey + "/" + myLatitude + "," + myLongitude + "?exclude=minutely,hourly,alerts,flags",
        dataType : "jsonp",
        success : function(darkData) {
          console.log(darkData);
          $('.each-forecast').remove()
          for (var i = 0; i < 3; i++) {
            var percent = 100 * darkData['daily']['data'][i]['precipProbability']
            $('.forecasts').append(
              "<div class='each-forecast'><p>Summary: " + darkData['daily']['data'][i]['summary'] + "</p>" +
              "<p>Max Temp: " + darkData['daily']['data'][i]['temperatureMax'] + "</p>" +
              "<p>Min Temp: " + darkData['daily']['data'][i]['temperatureMin'] + "</p>" +
              "<p>Chance of rain:  " + percent + "%</p>" +
              "<p>Wind Speed: " + darkData['daily']['data'][i]['windSpeed'] + "</p></div>" )
          }
        }
      });
  })
})




// $.ajax({
//   url : "https://api.darksky.net/forecast/" + 'fd59c08b71d9a82c1248b5012aca9c44' + "/" + myLatitude + "," + myLongitude + "?exclude=minutely,hourly,alerts,flags",
//   dataType : "jsonp",
//   success : function(pJSON) {
//     console.log(pJSON)
//
//     // var myTemp = parseInt(pJSON['currently']['temperature']);
//     // var myPrecip = pJSON['daily']['data'][0]['precipProbability']
//     // var myWind = pJSON['daily']['data'][0]['windSpeed']
//     // $(`.temp${result[j].id}`).append(`<p>Temperature: </p><p>${myTemp}&deg;F</p>`)
//     // $(`.precip${result[j].id}`).append(`<p>Precipitation: </p><p>${myPrecip} %</p>`)
//     // $(`.wind${result[j].id}`).append(`<p>Wind: </p><p>${myWind} mph</p>`)
//   }
// })
