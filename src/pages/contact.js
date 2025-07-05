import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = memo(function Contact() {
	return(
		<>
			<ul className={css(style.contactList)}>
				<li>
					<a 
						className={css(style.link)} 
						href="https://www.linkedin.com/in/mihai-gherman-92490086/" 
						target="_blank" 
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							alt="linkedin link"
						/>
					</a>
				</li>
				<li>
					<a className={css(style.link)} href="mailto:mihai@mgtech.me">
						<FontAwesomeIcon 
							icon={faEnvelope}
							alt="email link"
						/>
					</a>
				</li>
			</ul>
		</>
	)
});

const style = StyleSheet.create({
	contactList: {
		listStyle: 'none',
		paddingLeft: '0',
		display: 'flex',
		justifyContent: 'space-evenly',
		fontSize: '30px',
		margin: '60px',
	},
	link: {
		color: '#070F26',
		':hover': {
			color: '#45C3ED',
		}
	}
})

export default Contact;