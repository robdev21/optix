import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;

	& > button {
		margin: 4vmin;
	}
`;

const ButtonGroup = ({ children }) => {
	return (
		<StyledButtonGroup>
			{children}
		</StyledButtonGroup>
	)
}

export default ButtonGroup;