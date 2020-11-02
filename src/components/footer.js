import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import locationIcon from '../images/location.png';

function Footer() {
	return (
		<>
		<div className={css(style.footer)}>
			<ul className={css(style.menu)}>
				<li className={css(style.link)}>About me</li>
				<li className={css(style.link)}>
					Solutions
					<ul className={css(style.subMenu)}>
						<li className={css(style.subLink)}>Turbine Control Systems</li>
						<li className={css(style.subLink)}>Electrical Substation Automation</li>
						<li className={css(style.subLink)}>Oil&Gas Control Systems</li>
						<li className={css(style.subLink)} style={{paddingBottom: '0'}}>Vibration Analysis</li>
					</ul>
				</li>
				<li className={css(style.link)}>Costumers</li>
				<li className={css(style.link)}>Contact</li>
			</ul>
			<div>
				<h1 className={css(style.name)}>Mihai Gherman</h1>
				<img 
					src={locationIcon} 
					alt="Location icon"
					className={css(style.locationIcon)} 
				/>
			</div>
		</div>
		<p className={css(style.who)}>@evs</p>
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
	subMenu: {
		listStyle: 'none',
		padding: '0 0 0 10px',
	},
	link: {
		padding: '10px',
		':hover': {
			cursor: 'pointer',
			color: '#fff',
		}
	},
	subLink: {
		fontSize: '14px',
		paddingTop: '10px',
	},
	name: {
		':hover': {
			cursor: 'pointer',
			color: '#fff',
		}
	},
	locationIcon: {
		width: '20px',
		filter: 'invert(71%) sepia(53%) saturate(2516%) hue-rotate(168deg) brightness(100%) contrast(89%)',
	},
	who: {
		textAlign: 'center',
		fontSize: 	'11px',
		padding: '5px 0',
		margin: '0',
		backgroundColor: '#828C6C',
	}
});

export default Footer;
