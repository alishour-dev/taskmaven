//#region Import
import { setUser } from "@/features/auth/slice"
import supabaseClient from "@/lib/supabase/supabase-client"
import { useLayoutEffect } from "react"

import useDispatch from "./useDispatch"
//#endregion

const useAuth = () => {
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const { data: listener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
			console.log("session onAuthStateChange: ", session)
			dispatch(setUser(session?.user || null))
		})

		return () => {
			listener?.subscription.unsubscribe()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}

export default useAuth
