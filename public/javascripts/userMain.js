var heroku = 'https://fantastic-weather.herokuapp.com'
var server = heroku

$(document).ready(() => {
  console.log('linked');
  $.get(`${server}/locations`,(data) =>{
      for (var i = 0; i < data.length; i++) {
        $('.scrollmenu').append(`<div class="border userLocation">
                <h3 class="location">${data[i].name}</h3>
                <!-- potential gif load based on current weather ie sun, rain, clouds, windy- think yahoo weather! -->
                <img src="http://placehold.it/150x150">
                <h4 class="temp">temperature</h4>
                <h4 class="precip">precipitation</h4>
                <h4 class="wind">wind</h4>

                <div class="btn-group btn-group-justified btn-width" role="group" aria-label="...">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default edit-btn">Edit</button>
                  </div>
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default delete-btn">Delete</button>
                  </div>
                </div>
              </div>`)
      }
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
