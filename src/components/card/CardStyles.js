import styled from "styled-components";

export const CardStyles = styled.div`
	background-color: #fff;
	flex: 0 0 30rem;
	cursor: pointer;
	&:not(:last-of-type) {
		margin-right: 4rem;
		@media(max-width: 890px) {
			margin-right: 0;
			margin-bottom: 4rem;
			flex: 1;
		}
	}
`

export const CardHeaderStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid var(--grey);
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
	@media(max-width: 890px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.avatar-container {
			flex-basis: 30%;
		}
		.content-container {
			flex-basis: 50%;
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
	margin-bottom: 0.5rem;
`
export const TextContent = styled.p`
	color: var(--black);
`