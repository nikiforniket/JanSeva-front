import { SAVE_USER_INFO, SET_SCHEME_LIST } from "../actions/ActionTypes"


const initial_state = {
    userInfo : "",
    schemeList:''
}

const GeneralReducer = (state = initial_state, action) => {
    switch(action.type){
        case SAVE_USER_INFO: {
            return {...state, userInfo: action.payload}
        }
        case SET_SCHEME_LIST: {
            return {...state, schemeList:action.payload}
        }
        default:
            return state
    }
}

export default GeneralReducer