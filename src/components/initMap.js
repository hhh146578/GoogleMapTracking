
function initialize() {
  var map = new google.maps.Map(
    document.getElementById("map_canvas"), {
      center: new google.maps.LatLng(22.6, 120.34),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

}

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