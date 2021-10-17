import React from 'react'
import Card from '../card/Card'
import { DriverListStyles } from './DriverListStyles'

const DriverList = ({ drivers }) => {
	return (
		<DriverListStyles>
			{drivers.map((driver) => (
				<Card
					key={driver.firstName}
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
	)
}

export default DriverList
