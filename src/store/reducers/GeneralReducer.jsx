import { SAVE_USER_INFO, SET_ACH_LIST, SET_ALLOCATION_LIST, SET_FUND_DD_OPT, SET_FUND_LIST, SET_LOCATION_DD_OPT, SET_SCHEME_LIST, SET_SUB_LOCATION_DD_OPT, SET_WORK_DONE_LIST } from "../actions/ActionTypes"


const initial_state = {
    userInfo : "",
    schemeList:'',
    fundList:'',
    allocationList:'',
    workDoneList:'',
    locationDDOpt:'',
    subLocationDDOpt:'',
    fundDDOpt:'',
    achList:''
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
        case SET_WORK_DONE_LIST: {
            return {...state, workDoneList:action.payload}
        }
        case SET_LOCATION_DD_OPT: {
            return {...state, locationDDOpt:action.payload}
        }
        case SET_SUB_LOCATION_DD_OPT: {
            return {...state, subLocationDDOpt:action.payload}
        }
        case SET_FUND_DD_OPT: {
            return {...state, fundDDOpt:action.payload}
        }
        case SET_ACH_LIST: {
            return {...state, achList:action.payload}
        }
        default:
            return state
    }
}

export default GeneralReducer