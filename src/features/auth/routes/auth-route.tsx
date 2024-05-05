//#region Import
import Logo from "@/comps/common/logo"
import supabaseClient from "@/lib/supabase/supabase-client"
import { Auth } from "@supabase/auth-ui-react"
import { BaseAppearance, ThemeSupa } from "@supabase/auth-ui-shared"

import Lamp from "../comps/lamp"
//#endregion

const AuthRoute = () => {
	return (
		<div className='relative min-h-screen w-full lg:grid lg:min-h-screen lg:grid-cols-[auto_60%]'>
			<div className='bg-primary relative min-h-screen w-full flex-center' style={{ backgroundImage }}>
				<Logo className='absolute start-8 top-8' />

				<div className='bg-primary/5 rounded-[40px] rounded-bl-none rounded-tr-none px-8 pb-8 ring-2 ring-[#b6f0f9]/80 backdrop-blur-sm'>
					<div className='pb-6 pt-10'>
						<h1 className='text-secondary text-4xl font-light'>Getting Started</h1>
					</div>

					<Auth appearance={baseAppearance} providers={[]} supabaseClient={supabaseClient} />
				</div>
			</div>

			<Lamp />
		</div>
	)
}

export default AuthRoute

const baseAppearance: BaseAppearance = {
	className: {
		anchor: "text-secondary/50 transition-basic hover:text-secondary/100",
		button: "bg-secondary border-none rounded-md transition-basic hover:!bg-secondary/80",
		input: "rounded-md border-0 text-sm w-[260px] max-w-full",
		label: "text-secondary/70 text-sm mb-[4px]",
	},
	extend: true,
	theme: ThemeSupa,
}

const backgroundImage = `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b6f0f9' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
