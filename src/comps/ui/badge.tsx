//#region Import
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
//#endregion

const badgeVariants = cva(
	"inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
	{
								defaultVariants: {
			variant: "default",
		},
			variants: {
			variant: {
				default:
					"border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
				destructive:
					"border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",
				outline: "text-slate-950 dark:text-slate-50",
				secondary:
					"border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
			},
		},
	}
)

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
	<div className={twMerge(badgeVariants({ variant }), className)} {...props} />
)

export default Badge
