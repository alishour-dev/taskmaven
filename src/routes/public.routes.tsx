//#region Import
import type { RouteObject } from "react-router-dom"

import AuthRoute from "@/features/auth/routes/auth"
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
]

export default publicRoutes
