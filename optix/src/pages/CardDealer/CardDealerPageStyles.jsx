import styled from 'styled-components';

export const MainContainer = styled.main`
	background-color: #1b4a10;
	background-image: url('/images/cloth_background.jpg');
	padding: 1.17rem;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1.45fr 3.46fr 0.96fr 3.46fr 0.66fr;
	
	@media (min-width: 920px) {
		width: 80vw;
		height: 100vh;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1.35fr 4.65fr 0.6fr 3.03fr 0.58fr;
	}
`;

export const CardTableHeader = styled.header`
	text-align: center;
	color: #ffffff;
`;
export const CardTableSection = styled.div`
	padding: 6vmin;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(1, 1fr);
	gap: 3vmin;
`;

export const CardDeckSection = styled.div`
	padding-top: 3vmin;
	padding-bottom: 3vmin;
	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-template-rows: repeat(4, 1fr);
	gap: 0.3vmin;;
`;

export const DeckCount = styled.h4`
	margin-top: 3vmin;
	background-color: #fff;
	color: #000;
	text-align: center;
`;
