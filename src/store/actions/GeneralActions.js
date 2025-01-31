import { createAction } from "redux-actions";
import * as actionTypes from './ActionTypes'

export const saveUserInfo = createAction(actionTypes.SAVE_USER_INFO)