import React from 'react';

export default function Customer(props) {
	return (
		<>
			<img 
				alt={props.alt} 
				src={props.src}
				className={props.className} 
			/>
		</>
	)
}