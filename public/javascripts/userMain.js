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
                    <a href="userEdit.html?id=${data[i].id}"><button type="button" class="btn btn-default edit-btn">Edit</button></a>
                  </div>
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default delete-btn" id=${data[i].id}>Delete</button>
                  </div>
                </div>
              </div>`)
      }
    })


})

$(document).on('click','.delete-btn',function(){
   var delId = $(this).attr('id');

   console.log(delId);
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
