import React from 'react'
import styled from 'styled-components'
import DriverList from '../components/driver-list/DriverList'
import HomeHeader from '../components/home-header/HomeHeader'

const HomeStyles = styled.div`
	padding: 2rem;
`

const HomePage = () => {
	return (
		<HomeStyles>
			<HomeHeader />
			<DriverList />
		</HomeStyles>
	)
}

export default HomePage
