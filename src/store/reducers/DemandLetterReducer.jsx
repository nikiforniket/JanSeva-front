import { SET_DEMAND_LETTER_LIST } from "../actions/ActionTypes"


const initial_state = {
    demandLetterList : {},
}

const DemandLetterReducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_DEMAND_LETTER_LIST: {
            return {...state, demandLetterList: action.payload}
        }
        default:
            return state
    }
}

export default DemandLetterReducer