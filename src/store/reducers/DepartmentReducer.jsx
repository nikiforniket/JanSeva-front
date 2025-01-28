import { SET_DEPARTMENT_LIST } from "../actions/ActionTypes"


const initial_state = {
    departmentList : {},
}

const DepartmentReducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_DEPARTMENT_LIST: {
            return {...state, departmentList: action.payload}
        }
        default:
            return state
    }
}

export default DepartmentReducer