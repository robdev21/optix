import React, { useState } from 'react';
import styled from 'styled-components';

const Image = styled.div`
	background: url('${props => props.srcAlt.src}');
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	${props => props.reversed && 'cursor: pointer;'}
`;

const PlayingCard = ({ reversed, src, alt, ...otherProps }) => {
	const cardBackSrc = './images/CardBack.png';
	const cardBackAlt = 'card back';

	const [srcAlt, flipCard] = useState(reversed ? { src: cardBackSrc, alt: cardBackAlt } : { src: src, alt: alt });

	return (
		<Image title={srcAlt.alt} onClick={() => reversed && flipCard({ src: src, alt: alt })} srcAlt={srcAlt} reversed={reversed} {...otherProps} />
	);
}

export default PlayingCard;