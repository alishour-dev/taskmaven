//#region Import
import authReducer, { AuthSliceState } from "@/features/auth/slice"
import { combineReducers } from "@reduxjs/toolkit"
//#endregion

export type RootState = {
	auth: AuthSliceState
}

const reducer = combineReducers({
	auth: authReducer,
})

export default reducer
