import React from "react";
import Transmit from "react-transmit";
import Meal from "./Meal.js";

class List extends React.Component {
	render () {
		const meals = this.props.meals;

		return (
			<div>
				<h1>Meals:</h1>
				<ul>
					{ meals.map((meal) => <Meal meal={meal} /> ) }
				</ul>
			</div>
		);
	}
}

export default Transmit.createContainer(List, {
	queryParams: {
		count: 10
	},
	queries: {
		meals (queryParams) {
			return Meal.getQuery('meal', {mealId: 1});
		}
	}
});