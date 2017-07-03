import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''};
	}
	onInputChange(event){
		console.log(event.target.value);
	}
	render(){
		return(
			<div>
				<input
					// value = {this.state.term}
					// value = {this.state.term}
					//onChange = {this.onInputChange} />
					onChange = { event => this.setState({term: event.target.value}) } />
			</div>
		)
	}
}

export default SearchBar;