import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { LayoutStyles } from './LayoutStyles'

const Layout = (props) => {
	return (
		<>
			<Header />
			<LayoutStyles>
				<Sidebar />
				<main className="main">
					{props.children}
				</main>
			</LayoutStyles>
		</>
	)
}

export default Layout
