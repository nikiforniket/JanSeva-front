import { createAction } from "redux-actions";
import * as actionTypes from './ActionTypes'

export const saveUserInfo = createAction(actionTypes.SAVE_USER_INFO)

export const setSchemeList = createAction(actionTypes.SET_SCHEME_LIST)

export const setFundList = createAction(actionTypes.SET_FUND_LIST)

export const setAllocationList = createAction(actionTypes.SET_ALLOCATION_LIST)

export const setWorkDoneList = createAction(actionTypes.SET_WORK_DONE_LIST)

export const setLocationDDOpt = createAction(actionTypes.SET_LOCATION_DD_OPT)

export const setSubLocationDDOpt = createAction(actionTypes.SET_SUB_LOCATION_DD_OPT)

export const setFundDDOpt = createAction(actionTypes.SET_FUND_DD_OPT)

export const setAchList = createAction(actionTypes.SET_ACH_LIST)

export const setDrugComplaintList = createAction(actionTypes.SET_DRUG_COMPLAINT_LIST)