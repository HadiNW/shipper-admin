import { useLocation } from 'react-router-dom'
import { MenuItem, MenuList, SidebarStyles } from './SidebarStyles'

const Sidebar = () => {
	const location = useLocation()
	
	return (
		<SidebarStyles>
			<MenuList>
				<MenuItem to='/dashboard' active={location.pathname === '/dashboard'}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='menu-icon'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
						/>
					</svg>
					<p>Dashboard</p>
				</MenuItem>
				<MenuItem to='/' active={location.pathname === '/'}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='menu-icon'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
						/>
					</svg>
					<p>Driver Management</p>
				</MenuItem>
				<MenuItem to='/pickup' active={location.pathname === '/pickup'}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='menu-icon'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
						/>
					</svg>
					<p>Pickup</p>
				</MenuItem>
			</MenuList>
		</SidebarStyles>
	)
}

export default Sidebar
