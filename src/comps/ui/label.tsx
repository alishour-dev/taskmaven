//#region Import
import { Root } from "@radix-ui/react-label"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
//#endregion

const Label = forwardRef<React.ElementRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>(
	({ className, ...props }, ref) => (
		<Root
			className={twMerge(
				"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className
			)}
			ref={ref}
			{...props}
		/>
	)
)

Label.displayName = Root.displayName

export default Label
