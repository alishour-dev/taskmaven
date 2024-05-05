/* eslint-disable react-refresh/only-export-components */
/* eslint-disable perfectionist/sort-objects*/

//#region Import
import PrivateLayout from "@/comps/layouts/private-layout"
import { lazy } from "react"
import { Navigate, type RouteObject } from "react-router-dom"

const TasksRoute = lazy(() => import("@/features/tasks/routes/tasks-route"))

const TaskRoute = lazy(() => import("@/features/tasks/routes/task-route"))
//#endregion

/**
 * List of Private-Only Route Objects (routes) accessible only by authenticated users
 */
const privateRoutes: RouteObject[] = [
	{
		path: "/",
		element: <PrivateLayout />,
		children: [
			{ element: <TasksRoute />, path: "tasks" },
			{ element: <TaskRoute />, path: "tasks/:taskId" },

			// FALLBACK - Redirect IF ROUTE DOES NOT EXIST
			{ element: <Navigate to='/tasks' />, path: "*" },
		],
	},
]

export default privateRoutes
