import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";

function App() {

	const [grease, setGrease] = useState(false);

	const toggleGrease = () => {
		setGrease( greased => !greased)
	}

	const [sort, setSort] = useState("");
	const toggleSort = (someString) => {
		setSort(someString)
	}

	// This function needs to return true or falase so .filter 
	// will know what to put in the new array
	const onlyGreasedHogs = (hogObj) => {
		return hogObj.greased ? true : false;
	}

	// another way to write the same code w/ shorthand
	// const onlyGreasedHogs = hogObj => hogObj.greased

	const filteredHogs = grease ? 
		hogs.filter(onlyGreasedHogs) : 
		hogs
	
	// the callback given to .sort will be invoked with TWO arguments
	// it needs to know which hog goes first when sorting
	// the return value for byNameOrWeight, our callback to .sort, NEEDS TO BE 
	// a NEGATIVE or POSITIVE number. 
	// this is how sort will know which will go first when sorting
	const byNameOrWeight = (hogA, hogB) => {
		switch(sort) {
			case "name":
				if (hogA.name < hogB.name) {
					return -1
				} else {
					return 1
				}
			case "weight":
				return hogA.weight - hogB.weight
			default:
				return 0
		}
	}

	const sortedHogs = [...filteredHogs].sort(byNameOrWeight)

	return (
		<div className="App">
			<Nav toggleGrease={toggleGrease} toggleSort={toggleSort}/>
			<HogContainer hogs={sortedHogs}/>
		</div>
	);
}

export default App;
