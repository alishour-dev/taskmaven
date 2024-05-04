//#region Import
import { useAuth } from "@/providers/auth-provider"
import { useRoutes } from "react-router-dom"

import privateRoutes from "./private.routes"
import publicRoutes from "./public.routes"
//#endregion

const AppRoutes = () => {
	const { user } = useAuth()

	const routes = user ? privateRoutes : publicRoutes

	const element = useRoutes(routes)

	return <>{element}</>
}

export default AppRoutes
