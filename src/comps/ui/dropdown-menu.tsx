//#region Import
import {
	CheckboxItem,
	Content,
	Group,
	Item,
	ItemIndicator,
	Label,
	Portal,
	RadioGroup,
	RadioItem,
	Root,
	Separator,
	Sub,
	SubContent,
	SubTrigger,
	Trigger,
} from "@radix-ui/react-dropdown-menu"
import LucideCheck from "~icons/lucide/check"
import LucideChevronRight from "~icons/lucide/chevron-right"
import LucideCircle from "~icons/lucide/circle"
import { twMerge } from "tailwind-merge"
//#endregion

const DropdownMenu = (props: React.ComponentPropsWithoutRef<typeof Root>) => <Root {...props} />

const DropdownMenuSubTrigger = ({
	children,
	className,
	inset,
	...props
}: { inset?: boolean } & React.ComponentPropsWithoutRef<typeof SubTrigger>) => (
	<SubTrigger
		className={twMerge(
			"flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
			inset && "pl-8",
			className
		)}
		{...props}>
		{children}
		<LucideChevronRight className='ml-auto h-4 w-4' />
	</SubTrigger>
)

const DropdownMenuSubContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof SubContent>) => (
	<SubContent
		className={twMerge(
			`z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
			 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50`,
			className
		)}
		{...props}
	/>
)

const DropdownMenuContent = ({
	className,
	sideOffset = 4,
	...props
}: React.ComponentPropsWithoutRef<typeof Content>) => (
	<Portal>
		<Content
			className={twMerge(
				`z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
				 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50`,
				className
			)}
			sideOffset={sideOffset}
			{...props}
		/>
	</Portal>
)

const DropdownMenuItem = ({
	className,
	inset,
	...props
}: { inset?: boolean } & React.ComponentPropsWithoutRef<typeof Item>) => (
	<Item
		className={twMerge(
			"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
			inset && "pl-8",
			className
		)}
		{...props}
	/>
)

const DropdownMenuCheckboxItem = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof CheckboxItem>) => (
	<CheckboxItem
		className={twMerge(
			"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
			className
		)}
		{...props}>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<ItemIndicator>
				<LucideCheck className='h-4 w-4' />
			</ItemIndicator>
		</span>
		{children}
	</CheckboxItem>
)

const DropdownMenuRadioItem = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof RadioItem>) => (
	<RadioItem
		className={twMerge(
			"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
			className
		)}
		{...props}>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<ItemIndicator>
				<LucideCircle className='h-2 w-2 fill-current' />
			</ItemIndicator>
		</span>
		{children}
	</RadioItem>
)

const DropdownMenuLabel = ({
	className,
	inset,
	...props
}: { inset?: boolean } & React.ComponentPropsWithoutRef<typeof Label>) => (
	<Label className={twMerge("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)} {...props} />
)

const DropdownMenuSeparator = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Separator>) => (
	<Separator className={twMerge("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)} {...props} />
)

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
	<span className={twMerge("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
)

DropdownMenu.Trigger = Trigger
DropdownMenu.Group = Group
DropdownMenu.RadioGroup = RadioGroup
DropdownMenu.Sub = Sub
DropdownMenu.SubContent = DropdownMenuSubContent
DropdownMenu.Content = DropdownMenuContent
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem
DropdownMenu.RadioItem = DropdownMenuRadioItem
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Subtrigger = DropdownMenuSubTrigger
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Shortcut = DropdownMenuShortcut

export default DropdownMenu
