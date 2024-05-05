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
			<div className='relative min-h-screen w-full flex-center'>
				<Logo className='absolute start-8 top-8' />

				<div className='rounded-[40px] rounded-bl-none rounded-tr-none bg-primary/5 px-8 pb-8 ring-2 ring-[#b6f0f9]/80 backdrop-blur-sm'>
					<div className='pb-6 pt-10'>
						<h1 className='text-4xl font-light text-secondary'>Getting Started</h1>
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
