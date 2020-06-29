import React from 'react';
import './App.css';
var URLhost = 'https://swapi.py4e.com/api/people/'

class App extends React.Component {

	componentDidMount(){
		fetch(URLhost)
		.then( response => response.json())
		.then( people => console.log(people));
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
