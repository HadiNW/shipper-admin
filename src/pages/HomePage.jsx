import { useContext, useEffect } from 'react'
import driverContext from '../store/drivers-list-context'
import styled from 'styled-components'
import DriverList from '../components/driver-list/DriverList'
import HomeHeader from '../components/home-header/HomeHeader'

const HomeStyles = styled.div`
	padding: 2rem;
`

const HomePage = () => {
	const ctx = useContext(driverContext)

	useEffect(() => {
		ctx.getDrivers()
	}, [])
	return (
		<HomeStyles>
			<HomeHeader />
			<DriverList drivers={ctx.shownDrivers} />
		</HomeStyles>
	)
}

export default HomePage
