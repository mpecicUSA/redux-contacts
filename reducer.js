import {REMOVE_CONTACT, ADD_CONTACT} from "./actions.js"

export default (state=initialState, action) => {
    switch(action.type){
        case REMOVE_CONTACT:
            return [...state, action.payload]
        case ADD_CONTACT:
            return [...state, action.payload]
        default:
            return state
    }
}