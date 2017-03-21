// init map at Mile High, place marker at Barr Lake
function initMap() {
  var centerLatLng = {lat: 39.7439, lng: -105.0201};
  var markerLatLng = {lat: 39.9432, lng: -104.7597};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: centerLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Barr Lake'
  });
}
