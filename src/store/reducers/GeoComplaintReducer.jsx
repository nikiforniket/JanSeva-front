import { SET_GEOCOMPLAINT_LIST } from "../actions/ActionTypes"


const initial_state = {
    geoComplaintList : {},
}

const GeoComplaintReducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_GEOCOMPLAINT_LIST: {
            return {...state, geoComplaintList: action.payload}
        }
        default:
            return state
    }
}

export default GeoComplaintReducer