import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	appearance: none;
	outline: none;
	cursor: pointer;
	border: 0;
	border: 0.6vmin solid #828788;
	border-radius: 5%;
    padding: 1.5vmin 0vmin;
	font-size: 2.5vmin;
	font-weight: bold;
	color: ${props => props.disabled ? '#333' : '#fff'};
	background-color: ${props => props.disabled ? '#fff' : '#333'};
	${props => !props.disabled ? '&:hover {background-color: #8c8787;}' : ''}
`

const ButtonComponent = ({ children, disabled, onClick, ...otherProps }) => {
	return (
		<StyledButton disabled={disabled} onClick={onClick} {...otherProps}>{children}</StyledButton>
	)
};

export default ButtonComponent;