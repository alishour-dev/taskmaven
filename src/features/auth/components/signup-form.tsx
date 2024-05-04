//#region Import
import Button from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
//#endregion

export function LoginForm() {
	return (
		<Card className='mx-auto max-w-sm'>
			<CardHeader>
				<CardTitle className='text-xl'>Sign Up</CardTitle>
				<CardDescription>Enter your information to create an account</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='grid gap-4'>
					<div className='grid grid-cols-2 gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='first-name'>First name</Label>
							<Input id='first-name' placeholder='Max' required />
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='last-name'>Last name</Label>
							<Input id='last-name' placeholder='Robinson' required />
						</div>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input id='email' placeholder='m@example.com' required type='email' />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='password'>Password</Label>
						<Input id='password' type='password' />
					</div>
					<Button className='w-full' type='submit'>
						Create an account
					</Button>
					<Button className='w-full' variant='outline'>
						Sign up with GitHub
					</Button>
				</div>
				<div className='mt-4 text-center text-sm'>
					Already have an account?{" "}
					<Link className='underline' to='#'>
						Sign in
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}