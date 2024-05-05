//#region Import
import Button from "@/comps/ui/button"
import DropdownMenu from "@/comps/ui/dropdown-menu"
import Input from "@/comps/ui/input"
import { useAuth } from "@/providers/auth-provider"
import LucideCirclePlus from "~icons/lucide/circle-plus"
import LucideListFilter from "~icons/lucide/list-filter"
import LucideSearch from "~icons/lucide/search"
import { Outlet } from "react-router-dom"

import Logo from "../common/logo"
//#endregion

const PrivateLayout = () => {
	const { signOut } = useAuth()

	return (
		<div className='bg-muted/40 flex min-h-screen w-full flex-col'>
			<div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
				<header className='bg-background sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
					<Logo />

					<DropdownMenu>
						<DropdownMenu.Trigger asChild>
							<Button className='overflow-hidden rounded-full' size='icon' variant='outline'>
								<img
									alt='Avatar'
									className='overflow-hidden rounded-full'
									height={36}
									src='https://th.bing.com/th/id/R.898a454aed8eda454fd4ea6d11d27ebb?rik=KxVePyS8%2bDRP%2bA&pid=ImgRaw&r=0'
									width={36}
								/>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align='end'>
							<DropdownMenu.Label>My Account</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Settings</DropdownMenu.Item>
							<DropdownMenu.Item>Support</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item onClick={signOut}>Logout</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu>
				</header>
				<main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
					<div className='flex items-center'>
						<div className='relative ml-auto flex-1 md:grow-0'>
							<LucideSearch className='text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4' />
							<Input
								className='bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]'
								placeholder='Search...'
								type='search'
							/>
						</div>

						<div className='ml-auto flex items-center gap-2'>
							<DropdownMenu>
								<DropdownMenu.Trigger asChild>
									<Button className='h-8 gap-1' size='sm' variant='outline'>
										<LucideListFilter className='h-3.5 w-3.5' />
										<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content align='end'>
									<DropdownMenu.Label>Filter by</DropdownMenu.Label>
									<DropdownMenu.Separator />
									<DropdownMenu.CheckboxItem checked>Active</DropdownMenu.CheckboxItem>
									<DropdownMenu.CheckboxItem>Draft</DropdownMenu.CheckboxItem>
									<DropdownMenu.CheckboxItem>Archived</DropdownMenu.CheckboxItem>
								</DropdownMenu.Content>
							</DropdownMenu>

							<Button className='h-8 gap-1' size='sm'>
								<LucideCirclePlus className='h-3.5 w-3.5' />
								<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Task</span>
							</Button>
						</div>
					</div>

					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default PrivateLayout
