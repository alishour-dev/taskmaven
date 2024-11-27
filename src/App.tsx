//#region Import
import { LazyMotion } from "framer-motion"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import AppLoader from "./comps/common/app-loader"
import ErrorBoundary from "./comps/common/error-boundary"
import store from "./lib/redux-toolkit/store"
import AuthProvider from "./providers/auth-provider"
import AppRoutes from "./routes/app.routes"
//#endregion

const loadFramerFeatures = () => import("@/lib/framer-motion/features").then((res) => res.domAnimation)

const App = () => (
	<Suspense fallback={<AppLoader />}>
		<ErrorBoundary className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
			<ReduxProvider store={store}>
				<AuthProvider>
					<LazyMotion features={loadFramerFeatures} strict>
						<Router>
							<Toaster position='top-right' toastOptions={{ duration: 4000 }} />
							<AppRoutes />
						</Router>
					</LazyMotion>
				</AuthProvider>
			</ReduxProvider>
		</ErrorBoundary>
	</Suspense>
)

export default App
