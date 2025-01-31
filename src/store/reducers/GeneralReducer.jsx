import { SAVE_USER_INFO } from "../actions/ActionTypes"


const initial_state = {
    userInfo : {}
}

const GeneralReducer = (state = initial_state, action) => {
    switch(action.type){
        case SAVE_USER_INFO: {
            return {...state, userInfo: action.payload}
        }
        default:
            return state
    }
}

export default GeneralReducer