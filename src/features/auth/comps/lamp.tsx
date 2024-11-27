//#region Import
import { m } from "framer-motion"
//#endregion

const Lamp = () => (
	<div className='relative z-0 hidden min-h-screen w-full flex-col overflow-hidden rounded-s-3xl bg-slate-950 lg:flex-center'>
		<div className='relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center '>
			<m.div
				className='bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
				initial={{ opacity: 0.5, width: "15rem" }}
				style={{ backgroundImage }}
				transition={transition}
				whileInView={{ opacity: 1, width: "30rem" }}>
				<div className='absolute  bottom-0 left-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]' />
				<div className='absolute  bottom-0 left-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]' />
			</m.div>
			<m.div
				className='bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]'
				initial={{ opacity: 0.5, width: "15rem" }}
				style={{ backgroundImage }}
				transition={transition}
				whileInView={{ opacity: 1, width: "30rem" }}>
				<div className='absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]' />
				<div className='absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]' />
			</m.div>
			<div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl' />
			<div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md' />
			<div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl' />
			<m.div
				className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'
				initial={{ width: "8rem" }}
				transition={transition}
				whileInView={{ width: "16rem" }}
			/>
			<m.div
				className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 '
				initial={{ width: "15rem" }}
				transition={transition}
				whileInView={{ width: "30rem" }}
			/>

			<div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 ' />
		</div>

		<div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>
			<m.h1
				className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
				initial={{ opacity: 0.5, y: 100 }}
				transition={transition}
				whileInView={{ opacity: 1, y: 0 }}>
				Create Tasks <br /> the right way
			</m.h1>
		</div>
	</div>
)

export default Lamp

const transition = { delay: 0.3, duration: 0.8, ease: "easeInOut" }

const backgroundImage = "conic-gradient(var(--conic-position), var(--tw-gradient-stops))"
