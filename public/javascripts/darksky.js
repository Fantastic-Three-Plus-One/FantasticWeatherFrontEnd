$(document).ready(function($) {
  // This will not run!! Needs API key!!
  const myKey = '6c0dae0571b5513df10420a9d9b02045'
  var getInfo = function(){
      //Grabs the longitude and latitude
      var myLongitude = $('#long').val();
      var myLatitude = $('#lat').val();
      //Makes the request
      $.ajax({
        url : "https://api.darksky.net/forecast/" + myKey + "/" + myLongitude + "," + myLatitude +      "?exclude=minutely,hourly,alerts,flags",
        dataType : "jsonp",
        success : function(pJSON) {
          console.log(pJSON);
          var whereAmI = pJSON['timezone'];
          var myTemp = pJSON['currently']['temperature'];
          var myWeather = ("Current temperature in " + whereAmI + " is: " + myTemp);
          $('.result').html("<h3>" + myWeather + "</h3>")
          $('.lottsoweather').html(
            "<li>Max Temp: " + pJSON['daily']['data'][0]['temperatureMax'] + "</li>" +
            "<li>Min Temp: " + pJSON['daily']['data'][0]['temperatureMin'] + "</li>" +
            "<li>Max Wind: " + pJSON['daily']['data'][0]['windSpeed']  + "</li>" +
            "<li>Precip: " + pJSON['daily']['data'][0]['precipProbability']  + "% </li>" +
            "<li> Summary: " + pJSON['daily']['summary']  + "</li>"
          )
        }
      });
  }

$('#search').click(getInfo);
});
