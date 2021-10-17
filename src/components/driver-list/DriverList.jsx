import { useContext } from 'react'
import Card from '../card/Card'
import {
	DriverListStyles,
	Icon,
	PaginationStyles,
	Container,
	Text,
	DriverListContainer,
} from './DriverListStyles'

import { useHistory, useLocation } from 'react-router-dom'
import DriversListContext from '../../store/drivers-list-context'

const DriverList = ({ drivers }) => {
	const history = useHistory()
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const currPage = Number(queryParams.get('page'))

	const ctx = useContext(DriversListContext)

	const getNextPage = () => {
		let page = 2
		if (currPage && currPage > 0) {
			page = currPage + 1
		}
		history.push('/?page=' + page)
		ctx.getPaginationData(page)
	}

	const getPreviousPage = () => {
		let page = currPage - 1
		if (page < 1) {
			return
		}
		console.log(page)
		history.push('/?page=' + page)
		// ctx.getPaginationData(page)
	}
	return (
		<>
			<DriverListStyles>
				<DriverListContainer>
					{drivers.map((driver) => (
						<Card
							key={driver.id + driver.firstName}
							id={driver.id}
							firstName={driver.firstName}
							lastName={driver.lastName}
							email={driver.email}
							phone={driver.phone}
							dob={driver.dob}
							avatar={driver.avatar}
						/>
					))}
				</DriverListContainer>
			</DriverListStyles>
			<PaginationStyles>
				<Container onClick={getPreviousPage}>
					<Icon
						disabled={currPage <= 1}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M15 19l-7-7 7-7'
						/>
					</Icon>
					<Text disabled={currPage <= 1}>Previous Page</Text>
				</Container>
				<Container onClick={getNextPage}>
					<Text>Next Page</Text>
					<Icon
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</Icon>
				</Container>
			</PaginationStyles>
		</>
	)
}

export default DriverList
