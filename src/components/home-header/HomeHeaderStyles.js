import styled from "styled-components";

export const HomeHeaderStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	background-color: #fff;

	.left-header {
		.title {
			color: var(--orange);
			font-size: 2.5rem;
			font-weight: 800;
		}
		.subtitle {
			color: var(--grey);
			margin-top: .5rem;
		}
	}
	.right-header {
		display: flex;
		align-items: center;
		.input {
			margin-right: 1rem;
			display: flex;
			align-items: center;
			border: 1px solid var(--grey);
			border-radius: .5rem;
			color: var(--lightGrey);
			font-size: 1.5rem;
		}
		.search-icon {
			width: 2rem;
			margin-left: 1rem;
		}
		.search {
			padding:  1rem 0.5rem;
			outline: none;
			color: var(--lightGrey);
			font-size: 1.5rem;
			border: none;
		}
		.add-button {
			padding:  1rem 0.5rem;
			border: 1px solid var(--orange);
			border-radius: .5rem;
			font-size: 1.5rem;
			background-color: var(--orange);
			color: #fff;
			text-transform: capitalize;
			cursor: pointer;
			&:hover {
				background-color: var(--lightOrange);
			}
			display: flex;
			align-items: center;
			justify-content: space-between;
			.button-icon {
				width: 2rem;
				margin-left: 1rem;
			}
			
		}
	}
`