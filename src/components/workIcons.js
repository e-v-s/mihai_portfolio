import { StyleSheet, css } from 'aphrodite';
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

// const style = StyleSheet.create({
// 	flipCard: {
// 		backgroundColor: 'transparent',
// 		// width: '300px',
// 		// height: '300px',
// 		perspective: '1000px',
// 		':hover': {
// 			transform: 'rotateY(180deg)',
// 		},
// 	},
// 	flipCardInner: {
// 		position: 'relative',
// 		width: '100%',
// 		height: '100%',
// 		textAlign: 'center',
// 		transition: 'transform 0.6s',
// 		transformStyle: 'preserve-3d',
// 		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
// 		borderRadius: '10px',
// 		':hover': {
// 			transform: 'rotateY(180deg)',
// 		},
// 	},
// 	flipCardBack: {
// 		position: 'absolute',
// 		// width: '100%',
// 		// height: '100%',
// 		'-webkit-backface-visibility': 'hidden',
// 		backgroundColor: '#2980b9',
// 		color: 'white',
// 		transform: 'rotateY(180deg)',
// 	}
// })

export default CardSolution;
