import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
	font-family: ${props => props.fontFamily ? props.fontFamily + ', "Lucida Grande", Tahoma, Sans-Serif;' : '"Lucida Grande", Tahoma, Sans-Serif'};
	color: ${props => props.color || 'inherit'};
	font-size: ${props => props.fontSize || 'inherit'};
`;


const H1 = ({ children, ...otherProps }) => (<StyledHeader {...otherProps}>{children}</StyledHeader>);

export default H1;