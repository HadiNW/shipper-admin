import styled from 'styled-components'

export const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 8rem;
	padding: 0 2rem;
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

	.user-greeting {
		span {
			color: var(--orange);
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
