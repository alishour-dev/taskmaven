//#region Import
import type { User } from "@supabase/supabase-js"

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
//#endregion

export interface AuthSliceState {
	isSignIn: boolean
	user: null | User
}

const initialState: AuthSliceState = {
	isSignIn: true,
	user: null,
}

const AuthSlice = createSlice({
	initialState,
	name: "Auth",
	reducers: {
		setUser: (state, { payload }: PayloadAction<null | User>) => {
			state.user = payload
		},

		toggleAuth: (state, { payload }: PayloadAction<boolean | undefined>) => {
			state.isSignIn = payload ?? !state.isSignIn
		},
	},
})

export const { setUser, toggleAuth } = AuthSlice.actions

export default AuthSlice.reducer
