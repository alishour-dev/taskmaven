//#region Import
import LineMdClipboardTwotoneToClipboardTwotoneCheckTransition from "~icons/line-md/clipboard-twotone-to-clipboard-twotone-check-transition"
import { twMerge } from "tailwind-merge"
//#endregion

const Logo = ({ className }: { className?: string }) => (
	<div className={twMerge("inline-flex items-center gap-1 prevent-selection", className)}>
		<LineMdClipboardTwotoneToClipboardTwotoneCheckTransition className='size-10 text-blue-700' />
		<h1 className='bg-gradient-to-r from-blue-700 to-pink-600 bg-clip-text text-3xl font-black tracking-tighter text-transparent'>
			TaskMaven
		</h1>
	</div>
)

export default Logo
