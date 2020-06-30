import React from 'react';
const URLhost = 'https://swapi.py4e.com/api/'

class Options extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			field: 'planets',
			randomFact: [],
			allFacts: ''
		}
	}

	handleChange = (event) =>{
		this.setState({field: event.target.value});
	}

	getRandomFact = () =>{
		let length = this.state.allFacts.length;
		const min = 1;
		const rand = Math.floor(Math.random()*(length-min+1));
		this.setState({randomFact: this.state.allFacts[rand]});
	}

	componentDidUpdate(props){
		const newURL = URLhost + this.state.field;
		fetch(newURL)
		.then(response => response.json())
		.then(data => {
			const results = data.results;
			let allNames=[];
			results.map(data = (data) =>{
				allNames.push(data.name);
			})
			this.setState({allFacts: allNames});
		})
	}

	render(){
		return(
			<div>
				<section>
				<label id='optionLabel'>Select One:</label>
					<select onChange={this.handleChange} name='type' id='type'>
						<option value='planets'>Planets</option>
						<option value='people'>People</option>
						<option value='species'>Species</option>
						<option value='vehicles'>Vehicles</option>
					</select>
					<button onClick={this.getRandomFact}>Get Random {this.state.field}</button>
				</section>

				<section>
					<p id='animate'>
						{this.state.randomFact}
					</p>
				</section>
			</div>
		);
	}

}

export default Options;