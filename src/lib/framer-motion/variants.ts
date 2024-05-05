//#region Import
import type { Transition, VariantLabels } from "framer-motion"
//#endregion

interface ViewportOptions {
	amount?: "all" | "some" | number
	margin?: string
	once?: boolean
	root?: React.RefObject<Element>
}

export const ease = [0.6, 0.01, 0.01, 0.95]

export const variantPresets: Record<string, VariantLabels> = {
	exit: "exit",
	initial: "initial",
	whileInView: "animate",
}

export const transition: Transition = { duration: 1, ease }

export const viewport: ViewportOptions = { margin: "-100px", once: true }
