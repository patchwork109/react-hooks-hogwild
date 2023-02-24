import React from "react";
import HogCard from "./HogCard";

function HogContainer({hogs}) {

    console.log(hogs);

    // use map to make a new array of hogs
    const hogComponents = hogs.map(hogObj => {
        return <HogCard key={hogObj.name} hog={hogObj}/>
    })

	return (
		<div className="ui grid container">
            {hogComponents}
		</div>
	);
}

export default HogContainer;