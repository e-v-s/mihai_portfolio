import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
	return (
		<>
		<div className={css(style.footer)}>
			<ul className={css(style.menu)}>
				<li className={css(style.link)}>About</li>
				<li className={css(style.link)}>Work</li>
				<li className={css(style.link)}>Solutions</li>
				<li className={css(style.link)}>Contact</li>
			</ul>
			<h1 className={css(style.name)}>Mihai Gherman</h1>
		</div>
		<p className={css(style.who)}>powered by evs</p>
		</>
	)
};

const style = StyleSheet.create({
	footer: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#070F26',
		color: '#D7D7D9',
	},
	menu: {
		display: 'flex',
		flexDirection: 'column',
		listStyle: 'none',
	},
	link: {
		padding: '10px',
		':hover': {
			cursor: 'pointer',
			color: '#fff',
		}
	},
	name: {
		':hover': {
			cursor: 'pointer',
			color: '#fff',
		}
	},
	who: {
		textAlign: 'center',
		fontSize: 	'11px',
		margin: '0',
	}
});

export default Footer;
