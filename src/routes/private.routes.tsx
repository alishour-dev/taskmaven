/* eslint-disable react-refresh/only-export-components */
/* eslint-disable perfectionist/sort-objects*/

//#region Import
import type { RouteObject } from "react-router-dom"

import PrivateLayout from "@/components/layouts/private-layout"
import { lazy } from "react"

const NotFoundError = lazy(() => import("@/components/common/not-found-error"))

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

			// FALLBACK - 404 IF ROUTE DOES NOT EXIST
			{ element: <NotFoundError />, path: "*" },
		],
	},
]

export default privateRoutes
