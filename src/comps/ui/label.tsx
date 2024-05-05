//#region Import
import * as LabelPrimitive from "@radix-ui/react-label"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
//#endregion

const Label = forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		className={twMerge(
			"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
			className
		)}
		ref={ref}
		{...props}
	/>
))

Label.displayName = LabelPrimitive.Root.displayName

export default Label
