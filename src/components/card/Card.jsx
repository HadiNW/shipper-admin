import React from 'react'
import {
	CardStyles,
	CardHeaderStyles,
	Dot,
	OptionDot,
	CardContent,
	CardText,
	TextTitle,
	TextContent,
	CardContainer,
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
					<img src={avatar} className='avatar-img' alt='avatar' />
				</div>
				<div className='content-container'>
					<CardText>
						<TextTitle>Nama Driver</TextTitle>
						<TextContent>
							{firstName}, {lastName}
						</TextContent>
					</CardText>
					<CardText>
						<TextTitle>Telepon</TextTitle>
						<TextContent>{phone}</TextContent>
					</CardText>

					<CardText>
						<TextTitle>Email</TextTitle>
						<TextContent>{email}</TextContent>
					</CardText>
					<CardText>
						<TextTitle>Tanggal Lahir</TextTitle>
						<TextContent>{dob}</TextContent>
					</CardText>
				</div>
			</CardContent>
		</CardStyles>
	)
}

export default Card
