import { twMerge } from "tailwind-merge"

const Logo = ({ className }: { className?: string }) => (
	<h1
		className={twMerge(
			"bg-gradient-to-r from-blue-700 to-pink-600 bg-clip-text text-3xl font-black text-transparent",
			className
		)}>
		TaskMaven
	</h1>
)

export default Logo
