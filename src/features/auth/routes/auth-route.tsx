//#region Import
import Logo from "@/components/common/logo"
import supabaseClient from "@/lib/supabase/supabase-client"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
//#endregion

const AuthRoute = () => {
	return (
		<div className='min-h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2'>
			<div className='min-h-screen w-full flex-col gap-8 px-8 py-12 flex-center'>
				<Logo />

				<Auth appearance={{ theme: ThemeSupa }} providers={[]} supabaseClient={supabaseClient} />
			</div>
			<div className='bg-muted hidden min-h-screen lg:block'>
				<img
					alt='Image'
					className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
					height='1080'
					src='/valley.png'
					width='1920'
				/>
			</div>
		</div>
	)
}

export default AuthRoute
