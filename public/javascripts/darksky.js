$(document).ready(function($) {
// This will not run!! Needs API key!!
const myKey = 'fd59c08b71d9a82c1248b5012aca9c44'
let getInfo = function(){
    //Grabs the longitude and latitude
    let myLongitude = $('#long').val();
    let myLatitude = $('#lat').val();
    var myDate = $('#datepicker').val();
    const myTime = 'T12:00:00'
    //Makes the request
    $.ajax({
      url : "https://api.darksky.net/forecast/" + myKey + "/" + myLatitude + "," + myLongitude
      + "," + myDate + myTime
      + "?exclude=minutely,hourly,alerts,flags",
      dataType : "jsonp",
      success : function(darkData) {
        let whereAmI = darkData['timezone'];
        let myTemp = darkData['currently']['temperature'];
        let myWeather = ("Temperature on " + myDate + " in " + whereAmI + " is: " + myTemp);

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
