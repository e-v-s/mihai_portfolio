import React, { memo, useCallback } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Modali from 'modali';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Contact from '../pages/contact.js';
import locationIcon from '../images/location.png';

const Footer = memo(function Footer(props) {
	const handleAboutClick = useCallback(() => {
		props.typePage('about');
		window.scroll(0, 0);
	}, [props.typePage]);

	const handleSolutionsClick = useCallback(() => {
		props.typePage('solutions');
	}, [props.typePage]);

	return (
		<>
		<div className={css(style.footer)}>
			<ul className={css(style.menu)}>
				<li className={css(style.link)} onClick={handleAboutClick}>
					About me
				</li>
				<li className={css(style.link)} onClick={handleSolutionsClick}>
					Solutions
					<ul className={css(style.subMenu)}>
						<li className={css(style.subLink)}>Turbine Control Systems</li>
						<li className={css(style.subLink)}>Electrical Substation Automation</li>
						<li className={css(style.subLink)}>Oil&Gas Control Systems</li>
						<li className={css(style.subLink)} style={{paddingBottom: '0'}}>Vibration Analysis</li>
					</ul>
				</li>
				<li onClick={props.modal.toggleContactModal}>
              <span 
                className={css(style.link)} 
              >
                Contact
              </span>
            </li>
            <Modali.Modal {...props.modal.contactModal}>
              <Contact />
            </Modali.Modal>
			</ul>
			<div>
				<h1 className={css(style.name)}>Mihai Gherman</h1>
				<div className={css(style.location)}>
					<img 
						src={locationIcon} 
						alt="Location icon"
						className={css(style.locationIcon)} 
					/>
					<p>Quito | Ecuador</p>
				</div>
				<div className={css(style.email)}>
					<FontAwesomeIcon
						className={css(style.contactIcon)} 
						icon={faEnvelope} 
					/>
					<p style={{fontFamily: `'Source Sans Pro', 'Arial', sans-serif`}}>mihai@mgtech.me</p>					
				</div>
			</div>
		</div>
		<p className={css(style.who)}>@evs</p>
		</>
	)
});

const style = StyleSheet.create({
	footer: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#070F26',
		color: '#D7D7D9',
		'@media only screen and (max-width: 600px)': {
			flexDirection: 'column',
		}
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
		margin: '10px',
	},
	who: {
		textAlign: 'center',
		fontSize: 	'11px',
		padding: '5px 0',
		margin: '0',
		backgroundColor: '#828C6C',
	},
	location: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contactItems: {
		display: 'flex',
		justifyContent: 'center',
	},
	email: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '30px',
	},
	contactIcon: {
		fontSize: '30px',
		margin: '0 10px',
		cursor: 'pointer',
		color: '#44C3ED',
		':hover': {
			color: '#F2F2F2',
		}
	}
});

export default Footer;
