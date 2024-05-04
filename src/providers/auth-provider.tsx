//#region Import
import type { User } from "@supabase/supabase-js"

import AppLoader from "@/components/common/app-loader"
import supabaseClient from "@/lib/supabase/supabase-client"
import { createContext, useContext, useEffect, useState } from "react"
//#endregion

type AuthData = {
	signOut: () => void
	user: null | User
}

const AuthContext = createContext({} as AuthData)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthData => useContext(AuthContext)

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<null | User>(null)

	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const { data: listener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
			console.log("session onAuthStateChange: ", session)
			setUser(session?.user || null)
			setLoading(false)
		})

		return () => {
			listener?.subscription.unsubscribe()
		}
	}, [])

	const signOut = async () => {
		const { error } = await supabaseClient.auth.signOut()

		console.log("error: ", error)

		if (!error) {
			setUser(null)
		}

		return { error }
	}

	return <AuthContext.Provider value={{ signOut, user }}>{!loading ? children : <AppLoader />}</AuthContext.Provider>
}

export default AuthProvider
