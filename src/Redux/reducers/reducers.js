import {ADD_INPUT_DATA, DELETE_INPUT_DATA, EDIT_INPUT_DATA} from '../action/types'

const Initial_State = {
    input: ''
}

const inputReducers = (state = Initial_State, action) => {
    switch (action.type) {
        case ADD_INPUT_DATA:
            return {
                ...state,
                input: action.input
            };
        case DELETE_INPUT_DATA:
            return {
                ...state,
                input: action.input
            };
        case EDIT_INPUT_DATA:

            return {
                ...state
            };
        default:
            return state
    };
}

export default inputReducers;