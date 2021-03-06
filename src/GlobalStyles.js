import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');

	html {
		--orange: #FF3527;
		--black: #393939;
		--grey: #C6C6C6;
		--lightOrange: #ff5f53;
		--lightGrey: #969696;
		--offWhite: #ededed;
		--bg: #FAFAFA;
		--dark: #060606;
		font-size: 62.5%;
		box-sizing: border-box;

	}

	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto', sans-serif;
		font-size: 1.6rem;
		color: var(--black);
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: var(--black);
  	}
`

export default GlobalStyles