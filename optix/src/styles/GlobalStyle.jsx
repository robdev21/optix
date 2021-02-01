import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html, body {
		background-color: #1b4a10;
		font-size: 18px;

		@media (min-width: 920px) {
			font-size: 32px;
		}
	}

	@font-face {
		font-family: 'Showtime';
		src: url('/fonts/Showtime.ttf') format('ttf'), 
			url('/fonts/Showtime.woff') format('woff'),
			url('/fonts/Showtime.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}
`;

export default GlobalStyle;