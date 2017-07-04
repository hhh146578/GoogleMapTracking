import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// import GoogleMap from './components/google_map';
// import { withGoogleMap, GoogleMap } from "react-google-maps";

const API_KEY = 'AIzaSyAGD352Uy7zH5XMLZ__x2XyuMyUOxVDLgQ';// youtube API_key

// import App from './components/app';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards'); // pass initial term 
			
		// YTSearch( {key:API_KEY, term: 'surfboards'}, (videos) => {
		// 	// console.log(videos);
		// 	this.setState({
		// 		videos: videos,
		// 		selectedVideo: videos[0]
		// 	});
		// });
	}

	videoSearch(term){
		YTSearch( {key:API_KEY, term: term}, (videos) => {     //call back
			// console.log(videos);
			this.setState({
				videos: videos,
				selectedVideo: videos[0] // default selected video
			});
		});	
	}

	render(){
		const videoSearch = _.debounce( (term) => {this.videoSearch(term)} , 300);



		// const GettingStartedGoogleMap = withGoogleMap(props => (
		//   <GoogleMap
		//     ref={props.onMapLoad}
		//     defaultZoom={3}
		//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
		//     onClick={props.onMapClick}
		//   >

		//   </GoogleMap>
		// ));


		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch} /> 
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList onVideoSelect = {selectedVideo => this.setState( {selectedVideo} ) }
					videos = {this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));  //<App /> : must use object not class and put in the index.html id 'container'
// { } for JSX syntax use

//VideoList onVideoSelect = {selectedVideo => this.setState( {selectedVideo} ) }
//					videos = {this.state.videos}
// pass (1) function: onVideoSelect  (2) variable: videos