import React, {useEffect} from "react"
import { connect } from "react-redux"
import JokesList from "./JokesList"

import { fetchJokes } from "../actions/index"

const JokesPage = props => {
    
    useEffect(() => {
        props.fetchJokes()
    }, [])

    return <div>
        <h1 className="title">Jokes List</h1>
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