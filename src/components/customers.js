import React, { memo } from 'react';

const Customer = memo(function Customer(props) {
	return (
		<>
			<img 
				alt={props.alt} 
				src={props.src}
				className={props.className} 
			/>
		</>
	)
});

export default Customer;