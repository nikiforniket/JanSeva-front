import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ComplaintReducer from "./reducers/ComplaintReducer.jsx";
import { thunk } from "redux-thunk";
import DepartmentReducer from "./reducers/DepartmentReducer.jsx";

export const rootReducer = combineReducers({
    ComplaintReducer: ComplaintReducer,
    DepartmentReducer: DepartmentReducer
})

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store