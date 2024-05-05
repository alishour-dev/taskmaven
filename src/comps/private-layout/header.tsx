//#region Import
import { useAuth } from "@/providers/auth-provider"

import Logo from "../common/logo"
import Button from "../ui/button"
import DropdownMenu from "../ui/dropdown-menu"

//#endregion

const Header = () => {
	const { signOut } = useAuth()

	return (
		<header className='sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent'>
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
	)
}

export default Header
