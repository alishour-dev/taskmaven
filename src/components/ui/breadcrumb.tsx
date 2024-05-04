//#region Import
import { Slot } from "@radix-ui/react-slot"
import LucideChevronRight from "~icons/lucide/chevron-right"
import LucideEllipsis from "~icons/lucide/ellipsis"
import { twMerge } from "tailwind-merge"
//#endregion

const Breadcrumb = ({ ...props }: { separator?: React.ReactNode } & React.ComponentPropsWithoutRef<"nav">) => (
	<nav aria-label='breadcrumb' {...props} />
)

const BreadcrumbList = ({ className, ...props }: React.ComponentPropsWithoutRef<"ol">) => (
	<ol
		className={twMerge(
			"flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 dark:text-slate-400 sm:gap-2.5",
			className
		)}
		{...props}
	/>
)

const BreadcrumbItem = ({ className, ...props }: React.ComponentPropsWithoutRef<"li">) => (
	<li className={twMerge("inline-flex items-center gap-1.5", className)} {...props} />
)

const BreadcrumbLink = ({
	asChild,
	className,
	...props
}: { asChild?: boolean } & React.ComponentPropsWithoutRef<"a">) => {
	const Comp = asChild ? Slot : "a"

	return (
		<Comp
			className={twMerge("transition-colors hover:text-slate-950 dark:hover:text-slate-50", className)}
			{...props}
		/>
	)
}

const BreadcrumbPage = ({ className, ...props }: React.ComponentPropsWithoutRef<"span">) => (
	<span
		aria-current='page'
		aria-disabled='true'
		className={twMerge("font-normal text-slate-950 dark:text-slate-50", className)}
		role='link'
		{...props}
	/>
)

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
	<li aria-hidden='true' className={twMerge("[&>svg]:size-3.5", className)} role='presentation' {...props}>
		{children ?? <LucideChevronRight />}
	</li>
)

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
	<span
		aria-hidden='true'
		className={twMerge("flex h-9 w-9 items-center justify-center", className)}
		role='presentation'
		{...props}>
		<LucideEllipsis className='h-4 w-4' />
		<span className='sr-only'>More</span>
	</span>
)

Breadcrumb.List = BreadcrumbList
Breadcrumb.Link = BreadcrumbLink
Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Page = BreadcrumbPage
Breadcrumb.Separator = BreadcrumbSeparator
Breadcrumb.Ellipsis = BreadcrumbEllipsis

export default Breadcrumb
