//#region Import
import Breadcrumb from "@/components/ui/breadcrumb"
import Button from "@/components/ui/button"
import DropdownMenu from "@/components/ui/dropdown-menu"
import Input from "@/components/ui/input"
import LucideCirclePlus from "~icons/lucide/circle-plus"
import LucideListFilter from "~icons/lucide/list-filter"
import LucideSearch from "~icons/lucide/search"
import { Link, Outlet } from "react-router-dom"
//#endregion

const PrivateLayout = () => {
	return (
		<div className='bg-muted/40 flex min-h-screen w-full flex-col'>
			<div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
				<header className='bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
					<Breadcrumb className='hidden md:flex'>
						<Breadcrumb.List>
							<Breadcrumb.Item>
								<Breadcrumb.Link asChild>
									<Link to='#'>Dashboard</Link>
								</Breadcrumb.Link>
							</Breadcrumb.Item>
							<Breadcrumb.Separator />
							<Breadcrumb.Item>
								<Breadcrumb.Link asChild>
									<Link to='#'>Products</Link>
								</Breadcrumb.Link>
							</Breadcrumb.Item>
							<Breadcrumb.Separator />
							<Breadcrumb.Item>
								<Breadcrumb.Page>All Products</Breadcrumb.Page>
							</Breadcrumb.Item>
						</Breadcrumb.List>
					</Breadcrumb>

					<DropdownMenu>
						<DropdownMenu.Trigger asChild>
							<Button className='overflow-hidden rounded-full' size='icon' variant='outline'>
								<img
									alt='Avatar'
									className='overflow-hidden rounded-full'
									height={36}
									src='/placeholder-user.jpg'
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
							<DropdownMenu.Item>Logout</DropdownMenu.Item>
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
								<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Product</span>
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
