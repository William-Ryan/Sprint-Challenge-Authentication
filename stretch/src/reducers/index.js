import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../actions/index';

const initialState = {
    isFetching: false,
    jokes: [],
    errors: ''
}

const reducer = (state = initialState,  action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                volunteer: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        default:
            return state
    }
}

export default reducer