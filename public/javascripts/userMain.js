var heroku = 'https://fantastic-weather.herokuapp.com/'
var server = heroku

$(document).ready(() => {
  console.log('linked');
  $.get(`${server}/locations`,(data) =>{
      console.log(data);
    })
}
