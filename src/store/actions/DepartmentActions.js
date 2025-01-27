import { createAction } from "redux-actions";
import * as actionTypes from './ActionTypes'

export const setDepartmentList = createAction(actionTypes.SET_DEPARTMENT_LIST)
export const setDepartmentCategoryList = createAction(actionTypes.SET_DEPARTMENT_CATEOGORY_LIST)