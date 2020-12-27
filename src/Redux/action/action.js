import {ADD_INPUT_DATA, DELETE_INPUT_DATA, EDIT_INPUT_DATA} from './types';

export const addInputData = (input) => (dispatch) => {

    dispatch({type: ADD_INPUT_DATA, input});
}

export const deleteInputData = (input) => (dispatch) => {

    dispatch({type: DELETE_INPUT_DATA, input});
}

export const editInputData = (id, value, listValues) => (dispatch) => {
    
    const changedList = listValues.filter(el => el.id === id)[0]
    changedList.title = value

    dispatch({type: EDIT_INPUT_DATA, changedList});
}