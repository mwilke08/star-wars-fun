import React from 'react';
import './App.css';

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			field: '',
			randomFact: [],
			allFacts: ''
		}
	}

	render(){
		return (
			<div>
				<h1>Star Wars API Test</h1>
			</div>
  		);
	}
}

export default App;
