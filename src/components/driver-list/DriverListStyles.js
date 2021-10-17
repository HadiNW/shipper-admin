import styled from "styled-components";

export const DriverListStyles = styled.div`
	display: flex;
	overflow-x: scroll;
	overflow-y: hidden;
	margin-top: 3rem;
	background-color: red;
	padding: 1rem;
	min-width: 90rem;
`

export const PaginationStyles = styled.div`
	margin-top: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:not( :last-of-type) {
		margin-right: 5rem;
	}
`
export const Next = styled.div`
	display: flex;
`
export const Text = styled.p`
	color: ${(props) => props.disabled? 'var(--loghtGrey)' : 'var(--dark)'};
	margin: 0 0rem;
`
export const Icon = styled.svg`
	width: 1.5rem;
	color: ${(props) => props.disabled? 'var(--lightGrey)' : 'var(--dark)'};
`