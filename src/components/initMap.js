
function initialize() {
  var myLatLng = {lat: 22.6, lng: 120.34};
  var map = new google.maps.Map(
    document.getElementById("map_canvas"), {
      center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

// var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
// var beachMarker = new google.maps.Marker({
//   position: {lat: -33.890, lng: 151.274},
//   map: map,
//   icon: image
// });

google.maps.event.addDomListener(window, "load", initialize);

// function initMap() {
//   var myLatLng = {lat: -25.363, lng: 131.044};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
// }