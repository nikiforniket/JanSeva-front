import { SET_SUGGESTION_LIST } from "../actions/ActionTypes"


const initial_state = {
    suggestionList : {}
}

const SuggestionReducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_SUGGESTION_LIST: {
            return {...state, suggestionList: action.payload}
        }
        default:
            return state
    }
}

export default SuggestionReducer