import React, {useEffect} from "react"
import { connect } from "react-redux"
import JokesList from "./JokesList"

import { fetchJokes } from "../actions/index"

const JokesPage = props => {
    
    useEffect(() => {
        props.fetchJokes()
    }, [])

    return <div>
        <div className="card-container">
            {props.jokes.map(haha => (
                <JokesList haha={haha} />
            ))}
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        jokes: state.jokes,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchJokes }
)(JokesPage)