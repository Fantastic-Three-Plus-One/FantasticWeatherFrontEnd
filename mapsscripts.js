function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7439, lng: -105.0201},
    zoom: 10
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
    var place = autocomplete.getPlace();
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
    console.log(address)
    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);

  });
}


// marking multiple locatons:

//    Add multiple markers to map
//    var infoWindow = new google.maps.InfoWindow(), marker, i;

//    Place each marker on the map
//    for( i = 0; i < markers.length; i++ ) {
//     var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//     bounds.extend(position);
//     marker = new google.maps.Marker({
//         position: position,
//         map: map,
//         title: markers[i][0]
//     });

//    Add info window to marker
//    google.maps.event.addListener(marker, 'click', (function(marker, i) {
//      return function() {
//         infoWindow.setContent(infoWindowContent[i][0]);
//         infoWindow.open(map, marker);
//      }
//    })(marker, i));

//    Center the map to fit all markers on the screen
//    map.fitBounds(bounds);
//    }

//    Set zoom level
//    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//      this.setZoom(14);
//      google.maps.event.removeListener(boundsListener);
//    });
