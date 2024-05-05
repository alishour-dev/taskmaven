//#region Import
import Button from "@/comps/ui/button"
import DropdownMenu from "@/comps/ui/dropdown-menu"
import Input from "@/comps/ui/input"
import LucideCirclePlus from "~icons/lucide/circle-plus"
import LucideListFilter from "~icons/lucide/list-filter"
import LucideSearch from "~icons/lucide/search"
import { Outlet } from "react-router-dom"

import Header from "./header"
//#endregion

const PrivateLayout = () => {
	return (
		<div className='flex min-h-screen w-screen p-8'>
			<div className='flex flex-1 flex-col rounded-xl bg-white p-8 sm:gap-8'>
				<Header />

				<main className='flex flex-1 flex-col gap-4 md:gap-8'>
					<div className='flex items-center justify-between'>
						<div className='relative flex flex-1 items-center rounded-lg border md:grow-0'>
							<LucideSearch className='text-muted-foreground absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2' />
							<Input
								className='bg-background w-full rounded-lg border-0 pl-8 md:w-[200px] lg:w-[336px]'
								placeholder='Search...'
								type='search'
							/>
						</div>

						<div className='flex items-center gap-2'>
							<DropdownMenu>
								<DropdownMenu.Trigger asChild>
									<Button className='h-10 gap-1' variant='outline'>
										<LucideListFilter className='h-3.5 w-3.5' />
										<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content align='end'>
									<DropdownMenu.Label>Filter by</DropdownMenu.Label>
									<DropdownMenu.Separator />
									<DropdownMenu.CheckboxItem checked>Completed</DropdownMenu.CheckboxItem>
									<DropdownMenu.CheckboxItem>Pending</DropdownMenu.CheckboxItem>
								</DropdownMenu.Content>
							</DropdownMenu>

							<Button className='h-10 gap-1'>
								<LucideCirclePlus className='h-3.5 w-3.5' />
								<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Task</span>
							</Button>
						</div>
					</div>

					<div className='flex-1 overflow-hidden rounded-xl border p-4'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	)
}

export default PrivateLayout
