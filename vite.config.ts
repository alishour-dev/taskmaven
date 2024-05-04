//#region Import
import react from "@vitejs/plugin-react"
import { FontaineTransform } from "fontaine"
import { visualizer } from "rollup-plugin-visualizer"
import Unfonts from "unplugin-fonts/vite"
import Icons from "unplugin-icons/vite"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"
//#endregion

const baseConfigs = defineConfig({
	base: "/",
	build: {
		chunkSizeWarningLimit: 2000,
		commonjsOptions: { ignore: ["bufferutil", "utf-8-validate"] },

		minify: true,
		outDir: "dist",
		rollupOptions: {
			output: {
				manualChunks(id: string) {
					// creating a chunk to react routes deps. Reducing the vendor chunk size
					// eslint-disable-next-line
					// @ts-ignore
					if (id?.includes("react-router-dom") || id?.includes("react-router")) return "@react-router"
				},
			},
			treeshake: true,
		},
		sourcemap: false,
	},
	optimizeDeps: { include: ["react", "react-dom"] },
	plugins: [
		react(),
		tsconfigPaths({ ignoreConfigErrors: true }),
		visualizer({ filename: "chunks-report.html", open: true }),
		FontaineTransform.vite({
			fallbacks: ["BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans"],
		}),
		Unfonts({
			google: {
				families: [
					{
						defer: true,
						name: "Roboto",
						styles: "wght@300;400;500;700;900",
					},
				],
			},
		}),
		Icons({ compiler: "jsx", jsx: "react" }),
		svgr(),
	],
	publicDir: "public",
})

export default baseConfigs
