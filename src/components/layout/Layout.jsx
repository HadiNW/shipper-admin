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
				{props.children}
			</LayoutStyles>
		</>
	)
}

export default Layout
