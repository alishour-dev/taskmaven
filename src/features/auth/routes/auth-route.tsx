//#region Import
import useSelector from "@/hooks/useSelector"

import LoginForm from "../components/login-form"
import SignupForm from "../components/signup-form"
//#endregion

const AuthRoute = () => {
	const { isSignIn } = useSelector(({ auth }) => auth)

	return (
		<div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
			<div className='flex items-center justify-center py-12'>{isSignIn ? <LoginForm /> : <SignupForm />}</div>
			<div className='bg-muted hidden lg:block'>
				<img
					alt='Image'
					className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
					height='1080'
					src='/placeholder.svg'
					width='1920'
				/>
			</div>
		</div>
	)
}

export default AuthRoute
