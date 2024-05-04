//#region Import
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import AppLoader from "./components/common/app-loader"
import ErrorBoundary from "./components/common/error-boundary"
import store from "./lib/redux-toolkit/store"
import AuthProvider from "./providers/auth-provider"
import AppRoutes from "./routes/app.routes"
//#endregion

const App = () => (
	<Suspense fallback={<AppLoader />}>
		<ErrorBoundary className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
			<ReduxProvider store={store}>
				<AuthProvider>
					<Router>
						<Toaster position='top-right' toastOptions={{ duration: 4000 }} />
						<AppRoutes />
					</Router>
				</AuthProvider>
			</ReduxProvider>
		</ErrorBoundary>
	</Suspense>
)

export default App
