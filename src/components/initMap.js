
function initialize() {
  var myLatLng = {lat: 22.6, lng: 120.34};
  var toLatLng = {lat: 22.61, lng: 120.35};

  var map = new google.maps.Map(document.getElementById("map_canvas"), {
      center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker1 = new google.maps.Marker({
    position: myLatLng,
    map: map 
  });
      
  var marker2 = new google.maps.Marker({
    position: toLatLng,
    map: map
  });

  var dist = getDistanceFromLatLonInKm(myLatLng.lat, myLatLng.lon, toLatLng.lat, toLatLng.lng);

  var flightPlanCoordinates = [
    myLatLng,
    toLatLng
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}


// var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
// var beachMarker = new google.maps.Marker({
//   position: {lat: -33.890, lng: 151.274},
//   map: map,
//   icon: image
// });

// function changeMarkerPosition(marker) {
//   var latlng = new google.maps.LatLng(-24.397, 140.644);
//   marker.setPosition(latlng);
// }

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
  var dLon = deg2rad(lon2 - lon1); 

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
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