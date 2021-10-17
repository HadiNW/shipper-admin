import styled from "styled-components";

export const CardStyles = styled.div`
	background-color: #fff;
	flex-basis: 30rem;
	flex-shrink: 0;
	flex-grow: 0;
	cursor: pointer;
	&:not(:last-of-type) {
		margin-right: 4rem;
	}
`

export const CardHeaderStyles = styled.div`
	display: flex;
	/* flex-wrap: nowrap; */
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid var(--lightGrey);
	padding: 1rem 2rem;
	.driver-id {
		color: var(--grey);
		span {
			color: var(--lightOrange);
		}
	}
`

export const Dot = styled.span`
	background-color: var(--lightGrey);
	width: .2rem;
	height: .2rem;
	border-radius: 100%;
	&:not(:last-of-type) {
		margin-right: 0.3rem;
	}
`

export const OptionDot = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`


export const CardContent = styled.div`
	padding: 1rem 2rem;
	.avatar-container {
		width: 10rem;
		margin-bottom: 1rem;
		.avatar-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 100%;
		}
	}
`

export const CardText = styled.div`
	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`

export const TextTitle = styled.p`
	color: var(--grey);
	font-size: 1.5rem;
`
export const TextContent = styled.p`
	color: var(--black);
`