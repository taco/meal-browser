import React from "react";
import Transmit from "react-transmit";
import Client from "node-rest-client";

var client = new Client.Client();

class Meal extends React.Component {
	render () {
		const meal = this.props.meal;

		return (
			<li>{meal.name}</li>
		);
	}
}

export default Transmit.createContainer(Meal, {
	queries: {
		meal (queryParams) {
			return new Promise(function (resolve, reject){
				client.get('http://localhost:3001/meals', 
					function(data, response) {
						
						var result = JSON.parse(data.toString('utf8'));
						resolve(result.items);
					}
				);
			});
		}
	}
});