import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarStyles = styled.div`
	flex-basis: 20%;
	min-height: calc(100vh - 8rem);
	@media(max-width: 890px) {
		display: none;
	}
`

export const MenuList = styled.ul`
	padding: 5rem 0 1rem 1rem;
`

export const MenuItem = styled(Link)`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: ${props => props.$active ? 'var(--orange)' : 'var(--dark)'};
	padding: 1.5rem 1rem;
	position: relative;
	&::before {
		display: ${props => props.$active ? 'block' : 'none'};
		content: '';
		position: absolute;
		background-color: var(--orange);
		height: 100%;
		width: 5px;
		top: 0;
		left: 0;
	}
	.menu-icon {
		width: 2rem;
		margin-right: 2rem;
		color: var(--black);
		flex-shrink: 0;
	}
`
