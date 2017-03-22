$(document).ready(function($) {
// This will not run!! Needs API key!!
const myKey = '#########################'
let getInfo = function(){
    //Grabs the longitude and latitude
    let myLongitude = $('#long').val();
    let myLatitude = $('#lat').val();
    //Makes the request
    $.ajax({
      url : "https://api.darksky.net/forecast/" + myKey + "/" + myLatitude + "," + myLongitude + "?exclude=minutely,hourly,alerts,flags",
      dataType : "jsonp",
      success : function(darkData) {
        let whereAmI = darkData['timezone'];
        let myTemp = darkData['currently']['temperature'];
        let myWeather = ("Current temperature in " + whereAmI + " is: " + myTemp);
        $('.result').html("<h3>" + myWeather + "</h3>")
        $('.lottsoweather').html(
          "<li>Max Temp: " + darkData['daily']['data'][0]['temperatureMax'] + "</li>" +
          "<li>Min Temp: " + darkData['daily']['data'][0]['temperatureMin'] + "</li>" +
          "<li>Max Wind: " + darkData['daily']['data'][0]['windSpeed']  + "</li>" +
          "<li>Precip: " + darkData['daily']['data'][0]['precipProbability']  + "% </li>" +
          "<li> Summary: " + darkData['daily']['summary']  + "</li>"
          + "<li>" + darkData['currently']['icon'] + "</li>"
        )
      }
    });
}

$('#search').click(getInfo);
});
