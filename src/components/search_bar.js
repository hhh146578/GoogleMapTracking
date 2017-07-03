import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// the reason why we use class component instead of functional componenet,
// it that we want to keep the 'state'
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''};
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	render(){
		return(
			<div>
				<input
					value = {this.state.term}
					onChange = { event => this.onInputChange(event.target.value) } />
			</div>
		)
	}
}

export default SearchBar;