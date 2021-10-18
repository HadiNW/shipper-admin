import React from 'react'
import { AccountStyles, HeaderStyles, Logo } from './HeaderStyles'
import logoImg from '../../assets/logo.png'
const Header = () => {
	return (
		<HeaderStyles>
			<Logo>
				<img className='logo' src={logoImg} alt="logo" />
			</Logo>
			<AccountStyles>
				<p className='user-greeting'>Hello, <span> Hadi</span></p>
				<div className="user-icon-container">
					<svg className='user-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
					</svg>
				</div>
			</AccountStyles>
		</HeaderStyles>
	)
}

export default Header
