//#region Import
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
//#endregion

export function Dashboard() {
	return (
		<div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
			<div className='flex items-center justify-center py-12'>
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
								<Link className='ml-auto inline-block text-sm underline' href='/forgot-password'>
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
						<Link className='underline' href='#'>
							Sign up
						</Link>
					</div>
				</div>
			</div>
			<div className='bg-muted hidden lg:block'>
				<Image
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