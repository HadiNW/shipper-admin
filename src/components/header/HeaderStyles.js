import styled from 'styled-components'

export const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 8rem;
	padding: 0 2rem;
`

export const Container = styled.div`
	display: flex;
`

export const HamburgerStyle = styled.div`
	cursor: pointer;
	display: none;
	@media(max-width: 890px) {
		display: block;
		margin-right: 2rem;
	}
`

export const Line = styled.div`
	width: 3rem;
	height: 0.3rem;
	background-color: var(--grey);
	&:not(:last-of-type) {
		margin-bottom: 5px;
	}
`

export const Logo = styled.div`
	height: 2.5rem;
	.logo {
		width: 100%;
		height: 100%;
	}
`

export const AccountStyles = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	.user-greeting {
		span {
			color: var(--orange);
		}
		@media(max-width: 890px) {
			display: none;
		}
	}

	.user-icon-container {
		width: 3rem;
		margin-left: 1rem;
		.user-icon {
			width: 100%;
			height: 100%;
		}
	}
`
