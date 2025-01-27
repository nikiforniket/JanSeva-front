import { SET_COMPLAINT_LIST } from "../actions/ActionTypes"


const initial_state = {
    complaintDetails : {}
}

const ComplaintReducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_COMPLAINT_LIST: {
            return {...state, complaintDetails: action.payload}
        }
        default:
            return state
    }
}

export default ComplaintReducer