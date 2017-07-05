var marker;
var map;
var flightPath;
var lineCoords = [];
 
lat = 22.6;
lng = 120.34;

var datalat = [];
var datalng = [];

for(var i = 0; i < 1000; i++){
  datalat[i] = i / 10000 + lat;    
  datalng[i] = i / 10000 + lng;    
}

function initialize() {
  // var myLatLng = {lat: 22.6, lng: 120.34};
  // var toLatLng = {lat: 22.61, lng: 120.35};
  lat = datalat[0];
  lng = datalng[0];

  map = new google.maps.Map(document.getElementById("map_canvas"), {
      center: {lat: lat, lng: lng},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map 
  });

  // var marker1 = new google.maps.Marker({
  //   position: myLatLng,
  //   map: map 
  // });
      
  // var marker2 = new google.maps.Marker({
  //   position: toLatLng,
  //   map: map
  // });
  // var dist = getDistanceFromLatLonInKm(myLatLng.lat, myLatLng.lon, toLatLng.lat, toLatLng.lng);

  // var flightPlanCoordinates = [
  //   myLatLng,
  //   toLatLng
  // ];
  console.log("init---");
}

var i = 0;

function redraw(){
  map.setCenter({lat:lat, lng:lng, alt:0});
  marker.setPosition({lat:lat, lng:lng, alt:0});

  lineCoords.push(new google.maps.LatLng(lat, lng));
  flightPath = new google.maps.Polyline({
    path: lineCoords,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  console.log("redraw");
  flightPath.setMap(map);
  i = i + 1;
  lat = datalat[i] + 0;
  lng = datalng[i] + 0;
}

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

setInterval(redraw, 2000);

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
