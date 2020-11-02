import { css } from 'aphrodite';
import React from 'react';

function CardSolution(props) {
	return (
		<div className={props.cardStyle}>
			<img 
				alt={props.alt} 
				className={props.className}
				src={props.src} 
			/>
			<h2 className={props.titleStyle}>{props.text}</h2>
		</div>
	)
};

export default CardSolution;
