//#region Import
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
//#endregion

export interface AuthSliceState {
	isSignIn: boolean
}

const initialState: AuthSliceState = {
	isSignIn: true,
}

const AuthSlice = createSlice({
	initialState,
	name: "Auth",
	reducers: {
		toggleAuth: (state, { payload }: PayloadAction<boolean | undefined>) => {
			state.isSignIn = payload ?? !state.isSignIn
		},
	},
})

export const { toggleAuth } = AuthSlice.actions

export default AuthSlice.reducer
