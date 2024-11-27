//#region Import
import { configureStore, type Store } from "@reduxjs/toolkit"

import errorMiddleware from "./errorMiddleware"
import reducer from "./root-reducer"
//#endregion

const store: Store = configureStore({
	// only using devTools in development mode
	devTools: import.meta.env.NODE_ENV !== "production",

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(errorMiddleware),
	reducer,
})

export default store

export type AppDispatch = typeof store.dispatch
