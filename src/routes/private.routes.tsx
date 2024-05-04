/* eslint-disable perfectionist/sort-objects*/

import type { RouteObject } from "react-router-dom"

//#region Import
import PrivateLayout from "@/components/layouts/private-layout"
import { lazy } from "react"

// eslint-disable-next-line react-refresh/only-export-components
const NotFoundError = lazy(() => import("@/components/common/not-found-error"))
//#endregion

/**
 * @description A List of Private-Only Route Objects (routes)  accessible only by authenticated users
 */
const privateRoutes: RouteObject[] = [
	{
		path: "/",
		element: <PrivateLayout />,
		children: [
			{ element: <div>Main Route Here!</div>, path: "tasks" },

			// FALLBACK - 404 IF ROUTE DOES NOT EXIST
			{ element: <NotFoundError />, path: "*" },
		],
	},
]

export default privateRoutes
