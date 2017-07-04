import React, {Component} from 'react';
// import {GoogleMapLoader, GoogleMap} from 'react-google-maps';
// // import ReactDOM from 'react-dom';

class GoogleMap extends Component {
 	componentDidMount(){
 		new google.maps.Map(this.refs.map, {		
	 		zoom:12,
	 		center:{
	 			lat: 40,
	 			lng: -76
	 		}
 		});
 	}
	render(){
 		//this.ref.map
 		return <div ref="map" />;
	}
};

export default GoogleMap;
