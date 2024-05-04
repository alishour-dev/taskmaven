//#region Import
import { twMerge } from "tailwind-merge"
//#endregion

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={twMerge(
			"rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
			className
		)}
		{...props}
	/>
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={twMerge("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h3 className={twMerge("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
)

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
	<p className={twMerge("text-sm text-slate-500 dark:text-slate-400", className)} {...props} />
)

CardDescription.displayName = "CardDescription"

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={twMerge("p-6 pt-0", className)} {...props} />
)

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={twMerge("flex items-center p-6 pt-0", className)} {...props} />
)

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
