//#region Import
import SvgSpinners12DotsScaleRotate from "~icons/svg-spinners/12-dots-scale-rotate"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import ErrorBoundary from "./components/common/error-boundary"
import store from "./lib/redux-toolkit/store"
import AppRoutes from "./routes/app.routes"
//#endregion

const App = () => {
	return (
		<Suspense fallback={<AppLoader />}>
			<ErrorBoundary className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
				<ReduxProvider store={store}>
					<Router>
						<Toaster position='top-right' toastOptions={{ duration: 4000 }} />
						<AppRoutes />
					</Router>
				</ReduxProvider>
			</ErrorBoundary>
		</Suspense>
	)
}

const AppLoader = () => (
	<div className='flex h-screen w-screen items-center justify-center'>
		<SvgSpinners12DotsScaleRotate className='size-14' />
	</div>
)

export default App
