//#region Import
import AuthRoute from "@/features/auth/routes/auth-route"
import { Navigate, type RouteObject } from "react-router-dom"
//#endregion

/**
 * @description A List of Public-Only Route Objects (routes)
 *              accessible only by unauthenticated users
 */
const publicRoutes: RouteObject[] = [
	{
		element: <AuthRoute />,
		path: "/auth",
	},

	{ element: <Navigate to='/auth' />, path: "*" },
]

export default publicRoutes
