import React from "react";

const JokesList = props => {
    return(
        <div>
            <div className="card">
                <h2>Joke: {props.haha.joke}</h2>
            </div>
        </div>
    )
}

export default JokesList