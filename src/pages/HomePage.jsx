import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import driverContext from '../store/drivers-list-context'
import styled from 'styled-components'
import DriverList from '../components/driver-list/DriverList'
import HomeHeader from '../components/home-header/HomeHeader'

const HomeStyles = styled.div`
	flex-basis: 80%;
	padding: 2rem;
	overflow: hidden;
	background-color: var(--bg);
	@media(max-width: 890px) {
		flex-basis: 100%;
	}
`

const HomePage = () => {
	const ctx = useContext(driverContext)
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const page = Number(queryParams.get('page')) 

	useEffect(() => {
		ctx.getDrivers()
		ctx.getPaginationData(page)
	}, [])
	return (
		<HomeStyles>
			<HomeHeader />
			<DriverList drivers={ctx.shownDrivers} />
		</HomeStyles>
	)
}

export default HomePage
