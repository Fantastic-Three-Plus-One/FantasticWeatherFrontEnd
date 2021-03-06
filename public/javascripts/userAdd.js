
// $(document).ready(() => {




// var heroku =

// $(document).ready(() => {

var server = 'http://localhost:8000'
// var server = 'https://fantastic-weather.herokuapp.com'

var place
var lng
var lat

$.ajaxSetup({xhrFields: { withCredentials: true } })
$.get(`${server}/locations`,(data) => {
  console.log(data)
})

$(document).on('click','.newInfo-submit', () => {
  console.log('clicked!');

  $('.form-group').find('.form-control').val('');

    var newLocation = {
       name: $('#hikeName').val(),
       longitude: place.geometry.location.lng(),
       latitude: place.geometry.location.lat()
     }
    //  console.log(newLocation);
     $.ajaxSetup({xhrFields: { withCredentials: true } })
     $.post(`${server}/locations/user`, newLocation)
     .then((result) => {

       alert("Congrats you've added a hike!");
  //      console.log(result[0].id)
  //      newIdealWeather = {
  //      username_id: 2,
  //      location_id: result[0].id,
  //      temp_max: $('#temp_max').val(),
  //      temp_min: $('#temp_min').val(),
  //      wind_max: $('#Wind_max').val(),
  //      percip_max: $('#percip_max').val()
  //    }
  //    console.log(newIdealWeather);
  //    $.ajaxSetup({xhrFields: { withCredentials: true } })
  //    $.post(`${server}/idealWeather`, newIdealWeather)
  //    .then((result) => {
  //      console.log(result)
  //    }).catch(err => console.log("error", err))
  //  //
    }).catch(err => console.log("error", err))


  // $.ajax(`$`, {
  //   xhrFields: {
  //     withCredentials: true
  //   },
  //   method: "POST",
  //   crossDomain: true,
  //   contentType: "application/json",
  //   data: newLocation
  // }).done(function(data){
  //   alert("success");
  // }).fail(function(err){
  //   console.log(err)
  //   // alert("failed");
  // })
    //  console.log(updatedIdealWeather);
    //  newIdealWeather = {
    //   //  username_id:// will come from passport
    //   //  location_id: // we will get this back from the first post
    //    temp_max: $('#temp_max').val(),
    //    temp_min: $('#temp_min').val(),
    //    wind_max: $('#Wind_max').val(),
    //    percip_max: $('#percip_max').val()
    //  }

    //  $.post(`${server}/idealWeather`, newIdealWeather)

})

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7439, lng: -105.0201},
    zoom: 8
  });
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var types = document.getElementById('type-selector');
  var strictBounds = document.getElementById('strict-bounds-selector');

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
  });
  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    place = autocomplete.getPlace();
    if (!place.geometry) {
      // Validates search input
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    // point vs boundary
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(12);
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    lat = place.geometry.location.lat();
    lng = place.geometry.location.lng();

    // console.log(place.geometry.location.lat(),place.geometry.location.lng())
    // console.log(place.place_id);

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
  });
}
// })
