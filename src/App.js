import React from 'react';
import './App.css';

var req = new XMLHttpRequest();
var URLhost = 'https://swapi.co/api/planets/'

class App extends React.Component {

	render(){
		return (
			<div>
				<h1>Star Wars API Test</h1>
			</div>
  		);
	}
}

export default App;
