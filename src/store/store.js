import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ComplaintReducer from "./reducers/ComplaintReducer.jsx";
import { thunk } from "redux-thunk";
import DepartmentReducer from "./reducers/DepartmentReducer.jsx";
import DemandLetterReducer from "./reducers/DemandLetterReducer.jsx";
import SuggestionReducer from "./reducers/SuggestionReducer.jsx";
import GeoComplaintReducer from "./reducers/GeoComplaintReducer.jsx";

export const rootReducer = combineReducers({
    ComplaintReducer: ComplaintReducer,
    DepartmentReducer: DepartmentReducer,
    DemandLetterReducer: DemandLetterReducer,
    SuggestionReducer:SuggestionReducer,
    GeoComplaintReducer:GeoComplaintReducer
})

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store