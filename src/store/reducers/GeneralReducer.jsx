import { SAVE_USER_INFO, SET_ALLOCATION_LIST, SET_FUND_LIST, SET_SCHEME_LIST } from "../actions/ActionTypes"


const initial_state = {
    userInfo : "",
    schemeList:'',
    fundList:'',
    allocationList:'',
}

const GeneralReducer = (state = initial_state, action) => {
    switch(action.type){
        case SAVE_USER_INFO: {
            return {...state, userInfo: action.payload}
        }
        case SET_SCHEME_LIST: {
            return {...state, schemeList:action.payload}
        }
        case SET_FUND_LIST: {
            return {...state, fundList:action.payload}
        }
        case SET_ALLOCATION_LIST: {
            return {...state, allocationList:action.payload}
        }
        default:
            return state
    }
}

export default GeneralReducer