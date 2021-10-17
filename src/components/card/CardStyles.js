import styled from "styled-components";

export const CardStyles = styled.div`
	background-color: #fff;
	flex-basis: 30rem;
	flex-shrink: 0;
	&:not(:last-of-type) {
		margin-right: 2rem;
	}
`

export const CardHeaderStyles = styled.div`
	padding: 1rem;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
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
	.avatar-container {
		width: 10rem;
		.avatar {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`