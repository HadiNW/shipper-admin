import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarStyles = styled.div`
	/* flex: 0 0 20%; */
	flex-basis: 20%;
	min-height: calc(100vh - 8rem);
`

export const MenuList = styled.ul`
	padding: 5rem 0 1rem 1rem;
`

export const MenuItem = styled(Link)`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: var(--orange);
	&:not(:last-of-type) {
		margin-bottom: 2rem;
	}
	.menu-icon {
		width: 2rem;
		margin-right: 2rem;
		color: var(--black);
	}
`