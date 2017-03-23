$(document).ready(function($) {
// This will not run!! Needs API key!!
const myKey = 'fd59c08b71d9a82c1248b5012aca9c44'
let getInfo = function(){
    //Grabs the longitude and latitude
    let myLongitude = $('#long').val();
    let myLatitude = $('#lat').val();
    // var myDate = $('#datepicker').val();
    // const myTime = 'T12:00:00'
    //Makes the request
    let i = 0
    $.ajax({
      url : "https://api.darksky.net/forecast/" + myKey + "/" + myLatitude + "," + myLongitude
      // + "," + myDate
      // + myTime
      + "?exclude=minutely,hourly,alerts,flags",
      dataType : "jsonp",
      success : function(darkData) {
        let whereAmI = darkData['timezone'];
        let myTemp = darkData['currently']['temperature'];
        let myWeather = ("Temperature in " + whereAmI + " is: " + myTemp);
        $('.result').append("<h3>" + myWeather + "</h3>")

        console.log(darkData['daily']['data'][0]['summary'])
        console.log(darkData['daily']['data'][1]['summary'])
        console.log(darkData['daily']['data'][2]['summary'])
        for (var i = 0; i < 5; i++) {
          $('.lottsoweather').append(
            "<li>Summary: " + darkData['daily']['data'][i]['summary'] + "</li>" +
            "<li>Max Temp: " + darkData['daily']['data'][i]['temperatureMax'] + "</li>" +
            "<li>Min Temp: " + darkData['daily']['data'][i]['temperatureMin'] + "</li>" +
            "<li>Rain?  " + darkData['daily']['data'][i]['precipProbability'] + "</li>" +
            "<li>Wind Speed: " + darkData['daily']['data'][i]['windSpeed'] + "</li>" +
            "<li>Icon: " + darkData['daily']['data'][i]['icon'] + "</li>" )
        }
      }
    });
}

$('#search').click(getInfo);
});
