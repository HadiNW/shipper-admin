import React from 'react'
import styled from 'styled-components'
import HomeHeader from '../components/home-header/HomeHeader'

const HomeStyles = styled.div`
	padding: 2rem;
`

const HomePage = () => {
	return (
		<HomeStyles>
			<HomeHeader />
		</HomeStyles>
	)
}

export default HomePage
