import React from 'react'
import {
	CardStyles,
	CardHeaderStyles,
	Dot,
	OptionDot,
	CardContent,
} from './CardStyles'

const Card = ({ id, firstName, lastName, phone, email, avatar, dob }) => {
	return (
		<CardStyles>
			<CardHeaderStyles>
				<p className='driver-id'>
					Driver ID <span>{id || 'N/A'}</span>
				</p>
				<OptionDot>
					<Dot />
					<Dot />
					<Dot />
				</OptionDot>
			</CardHeaderStyles>
			<CardContent>
				<div className='avatar-container'>
					<img src={avatar} className='avatar-img' alt="avatar" />
				</div>
			</CardContent>
			<div className='name'>
				<p className='title'>Nama Driver</p>
				<p>
					{firstName}, {lastName}
				</p>
			</div>
			<div className='phone'>
				<p className='title'>Telepon</p>
				<p>{phone}</p>
			</div>
			<div className='email'>
				<p className='title'>Email</p>
				<p>{email}</p>
			</div>
			<div className='dob'>
				<p className='title'>Tanggal Lahir</p>
				<p>{dob}</p>
			</div>
		</CardStyles>
	)
}

export default Card
