import React, { useState } from "react";

function HogCard({hog}) {

    const Front = ({hog}) => {
        return (
            <div>
                <h3>{hog.name}</h3>
                <img src={hog.image} alt={hog.name}/>
            </div>
        )
    }
    const Back = ({hog}) => {
        return (
            <div>
                <h1>{hog.name}</h1>
                <h3>{hog.specialty}</h3>
                <h2>{hog.weight} kilos</h2>
                {/* using bracket notation below b/c it's a string in the data */}
                <h4 className="achievementText">
                    {hog["highest medal achieved"]}
                </h4>
                {hog.greased ? <h1>READY FOR FUN!</h1> : <div>no grease</div>}
            </div>
        )
    }

    const [showFront, setShowFront] = useState(false);

    const toggleFront = () => { 
        setShowFront( showFront => !showFront);
    }

    console.log(hog);

	return (
		<div 
            onClick={toggleFront}
            className="ui eight wide column image pigTile">
            { showFront ?
                <Front hog={hog}/> :
                <Back hog={hog}/>
            }
		</div>
	);
}

export default HogCard;