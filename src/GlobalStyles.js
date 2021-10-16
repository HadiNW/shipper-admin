import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');

	*, *::before, *::after {
		margin: 0;
		padding: 0;
	}
	html {
		font-size: 62.5%;
	}
	body {
		font-family: 'Roboto', sans-serif;
		font-size: 1.6rem;
	}
`

export default GlobalStyles