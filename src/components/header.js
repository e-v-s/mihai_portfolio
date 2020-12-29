import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header(props) {
	return(
		<>
			<section className={css(style.header)}>
				<span className={css(style.link)}>
					<h1 onClick={props.onClick} className={props.onScrollLogo}>MG</h1>
				</span>
			</section>
		</>
	)
}

const style = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	link: {
		textDecoration: 'none',
		cursor: 'pointer',
	}
});

export default Header;
