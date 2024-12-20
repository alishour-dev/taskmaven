//#region Import
import type { Config } from "tailwindcss"

import FormPlugin from "@tailwindcss/forms"
import TypographyPlugin from "@tailwindcss/typography"
import AnimatePlugin from "tailwindcss-animate"
import plugin from "tailwindcss/plugin"
//#endregion

const customUtilities = plugin(function ({ addUtilities }) {
	addUtilities({
		".backface-hidden": { "backface-visibility": "hidden" },
		".backface-visible": { "backface-visibility": "visible" },
		".flex-center": { alignItems: "center", display: "flex", justifyContent: "center" },
		".inline-flex-center": { alignItems: "center", display: "inline-flex", justifyContent: "center" },
		".prevent-selection": {
			MozUserSelect: "none",
			MsUserSelect: "none",
			"user-select": "none",
			WebkitTouchCallout: "none",
			WebkitUserDrag: "none",
			WebkitUserSelect: "none",
		},
		".transition-basic": {
			transitionDuration: "300ms",
			transitionProperty: "all",
			transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		},
	})
})

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class"],
	plugins: [customUtilities, FormPlugin, AnimatePlugin, TypographyPlugin],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: { "2xl": "1400px" },
		},
		extend: {
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			colors: {
				primary: "#22d3ee",
				secondary: "#020617",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			screens: {
				"2xs": "400px",
				"3xl": "2000px",
				xs: "576px",
			},
		},
	},
}

export default config
