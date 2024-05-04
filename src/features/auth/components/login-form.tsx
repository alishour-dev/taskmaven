//#region Import
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import useDispatch from "@/hooks/useDispatch"
import { Link } from "react-router-dom"

import { toggleAuth } from "../slice"
//#endregion

const LoginForm = () => {
	const dispatch = useDispatch()

	return (
		<div className='mx-auto grid w-[350px] gap-6'>
			<div className='grid gap-2 text-center'>
				<h1 className='text-3xl font-bold'>Login</h1>
				<p className='text-muted-foreground text-balance'>Enter your email below to login to your account</p>
			</div>
			<div className='grid gap-4'>
				<div className='grid gap-2'>
					<Label htmlFor='email'>Email</Label>
					<Input id='email' placeholder='m@example.com' required type='email' />
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center'>
						<Label htmlFor='password'>Password</Label>
						<Link className='ml-auto inline-block text-sm underline' to='/forgot-password'>
							Forgot your password?
						</Link>
					</div>
					<Input id='password' required type='password' />
				</div>
				<Button className='w-full' type='submit'>
					Login
				</Button>
				<Button className='w-full' variant='outline'>
					Login with Google
				</Button>
			</div>
			<div className='mt-4 text-center text-sm'>
				Don&apos;t have an account?{" "}
				<Button className='underline' onClick={() => dispatch(toggleAuth(false))} variant='link'>
					Sign up
				</Button>
			</div>
		</div>
	)
}

export default LoginForm
