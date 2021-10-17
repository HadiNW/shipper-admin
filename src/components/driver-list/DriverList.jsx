import React from 'react'
import Card from '../card/Card'
import {
	DriverListStyles,
	Icon,
	PaginationStyles,
	Container,
	Text,
} from './DriverListStyles'

const DriverList = ({ drivers }) => {
	return (
		<>
			<DriverListStyles>
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
			</DriverListStyles>
			<PaginationStyles>
				<Container>
					<Icon
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
					<Text>Previous Page</Text>
				</Container>
				<Container>
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
