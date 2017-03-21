var heroku = 'https://fantastic-weather.herokuapp.com'
var server = heroku

$(document).ready(() => {
  console.log('linked');
  $.get(`${server}/locations`,(data) =>{
      console.log(data);
    })

  //   $.ajax({
  //     method: 'GET',
  //     url: 'https://fantastic-weather.herokuapp.com/locations'
  //   })
  //   .then( (data) => {
  //     console.log(data);
  //   }).catch((err) => {
  //    console.log(err)
  //  })
})
