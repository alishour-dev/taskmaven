import { useRoutes } from "react-router-dom"

import privateRoutes from "./private.routes"
import publicRoutes from "./public.routes"

const auth = {
	token: "",
	user: "hghg",
}

const AppRoutes = () => {
	// const auth = useAuth();
	const routes = auth.user ? privateRoutes : publicRoutes

	const element = useRoutes(routes)

	return <>{element}</>
}

export default AppRoutes
