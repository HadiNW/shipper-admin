import styled from "styled-components";

export const SidebarStyles = styled.div`
	flex-basis: 25%;
	min-height: 100vh;
	padding: 5rem 0 1rem 1rem;
`

export const MenuList = styled.ul`

`

export const MenuItem = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: red;
	&:not(:last-of-type) {
		margin-bottom: 2rem;
	}
	.menu-icon {
		width: 2rem;
		margin-right: 2rem;
	}
`