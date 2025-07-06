import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = memo(function Contact() {
	return(
		<div className={css(style.contactContainer)}>
			<div className={css(style.content)}>
				<h2 className={css(style.mainTitle)}>Get in Touch</h2>
				<div className={css(style.contactMethods)}>
					<div className={css(style.contactCard)}>
						<div className={css(style.iconContainer)}>
							<FontAwesomeIcon icon={faEnvelope} className={css(style.icon)} />
						</div>
						<div className={css(style.contactInfo)}>
							<h3 className={css(style.contactTitle)}>Email</h3>
							<a 
								href="mailto:mihai@mgtech.me" 
								className={css(style.contactLink)}
							>
								mihai@mgtech.me
							</a>
							<p className={css(style.contactDescription)}>
								Perfect for project inquiries and detailed discussions
							</p>
						</div>
					</div>

					<div className={css(style.contactCard)}>
						<div className={css(style.iconContainer)}>
							<FontAwesomeIcon icon={faLinkedin} className={css(style.icon)} />
						</div>
						<div className={css(style.contactInfo)}>
							<h3 className={css(style.contactTitle)}>LinkedIn</h3>
							<a 
								href="https://www.linkedin.com/in/mihai-gherman-92490086/" 
								target="_blank" 
								rel="noreferrer"
								className={css(style.contactLink)}
							>
								Connect on LinkedIn
							</a>
							<p className={css(style.contactDescription)}>
								View my professional experience and network
							</p>
						</div>
					</div>

					<div className={css(style.contactCard)}>
						<div className={css(style.iconContainer)}>
							<FontAwesomeIcon icon={faMapMarkerAlt} className={css(style.icon)} />
						</div>
						<div className={css(style.contactInfo)}>
							<h3 className={css(style.contactTitle)}>Location</h3>
							<p className={css(style.contactText)}>I'm available worldwide</p>
						</div>
					</div>
				</div>

				<div className={css(style.ctaSection)}>
					<div className={css(style.ctaCard)}>
						<h3 className={css(style.ctaTitle)}>Ready to Start?</h3>
						<p className={css(style.ctaText)}>
							I'm available for new projects and collaborations. 
							Let's discuss how I can help bring your vision to life.
						</p>
						<div className={css(style.ctaButtons)}>
							<a 
								href="mailto:mihai@mgtech.me?subject=Project Inquiry" 
								className={css(style.primaryButton)}
							>
								<FontAwesomeIcon icon={faEnvelope} className={css(style.buttonIcon)} />
								Send Email
							</a>
							<a 
								href="https://www.linkedin.com/in/mihai-gherman-92490086/" 
								target="_blank" 
								rel="noreferrer"
								className={css(style.secondaryButton)}
							>
								<FontAwesomeIcon icon={faLinkedin} className={css(style.buttonIcon)} />
								Connect on LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
});

const style = StyleSheet.create({
	contactContainer: {
		padding: '0',
		maxWidth: '450px',
		margin: '0 auto',
		fontFamily: `'Source Sans Pro', 'Arial', sans-serif`,
		'@media only screen and (max-width: 480px)': {
			maxWidth: '100%',
		},
	},

	content: {
		padding: '0 16px',
		'@media only screen and (max-width: 480px)': {
			padding: '0 12px',
		},
	},
	mainTitle: {
		fontSize: '24px',
		fontWeight: '600',
		color: '#011140',
		textAlign: 'center',
		marginBottom: '24px',
		fontFamily: `'Inter', 'Arial', sans-serif`,
		'@media only screen and (max-width: 480px)': {
			fontSize: '20px',
			marginBottom: '20px',
		},
	},
	contactMethods: {
		marginBottom: '24px',
		'@media only screen and (max-width: 480px)': {
			marginBottom: '20px',
		},
	},
	contactCard: {
		display: 'flex',
		alignItems: 'flex-start',
		padding: '16px',
		marginBottom: '12px',
		background: 'rgba(1, 17, 64, 0.02)',
		borderRadius: '8px',
		border: '1px solid rgba(1, 17, 64, 0.1)',
		transition: 'all 0.3s ease',
		':hover': {
			background: 'rgba(1, 17, 64, 0.05)',
			borderColor: 'rgba(1, 17, 64, 0.2)',
			transform: 'translateY(-1px)',
			boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
		},
		'@media only screen and (max-width: 480px)': {
			padding: '12px',
			marginBottom: '8px',
		},
	},
	iconContainer: {
		width: '40px',
		height: '40px',
		borderRadius: '8px',
		background: 'linear-gradient(135deg, #011140 0%, #405B73 100%)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '16px',
		flexShrink: 0,
		'@media only screen and (max-width: 480px)': {
			width: '36px',
			height: '36px',
			marginRight: '12px',
		},
	},
	icon: {
		fontSize: '16px',
		color: '#fff',
		'@media only screen and (max-width: 480px)': {
			fontSize: '14px',
		},
	},
	contactInfo: {
		flex: 1,
	},
	contactTitle: {
		fontSize: '16px',
		fontWeight: '600',
		color: '#011140',
		marginBottom: '6px',
		fontFamily: `'Inter', 'Arial', sans-serif`,
		'@media only screen and (max-width: 480px)': {
			fontSize: '15px',
		},
	},
	contactLink: {
		color: '#405B73',
		textDecoration: 'none',
		fontWeight: '500',
		fontSize: '14px',
		transition: 'color 0.3s ease',
		':hover': {
			color: '#011140',
			textDecoration: 'underline',
		},
		'@media only screen and (max-width: 480px)': {
			fontSize: '13px',
		},
	},
	contactText: {
		color: '#405B73',
		fontWeight: '500',
		fontSize: '14px',
		marginBottom: '6px',
		'@media only screen and (max-width: 480px)': {
			fontSize: '13px',
		},
	},
	contactDescription: {
		fontSize: '12px',
		color: '#666',
		margin: '6px 0 0 0',
		lineHeight: '1.3',
		'@media only screen and (max-width: 480px)': {
			fontSize: '11px',
		},
	},
	ctaSection: {
		marginTop: '24px',
		marginBottom: '40px',
		'@media only screen and (max-width: 480px)': {
			marginTop: '20px',
			marginBottom: '30px',
		},
	},
	ctaCard: {
		background: 'linear-gradient(135deg, #011140 0%, #405B73 100%)',
		padding: '16px',
		borderRadius: '12px',
		textAlign: 'center',
		color: '#fff',
		'@media only screen and (max-width: 480px)': {
			padding: '12px',
		},
	},
	ctaTitle: {
		fontSize: '18px',
		fontWeight: '600',
		marginBottom: '12px',
		fontFamily: `'Inter', 'Arial', sans-serif`,
		'@media only screen and (max-width: 480px)': {
			fontSize: '16px',
		},
	},
	ctaText: {
		fontSize: '14px',
		lineHeight: '1.4',
		marginBottom: '16px',
		opacity: '0.9',
		'@media only screen and (max-width: 480px)': {
			fontSize: '13px',
			marginBottom: '12px',
		},
	},
	ctaButtons: {
		display: 'flex',
		gap: '12px',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'@media only screen and (max-width: 480px)': {
			flexDirection: 'column',
			alignItems: 'center',
			gap: '8px',
		},
	},
	primaryButton: {
		display: 'flex',
		alignItems: 'center',
		gap: '6px',
		padding: '10px 20px',
		background: '#fff',
		color: '#011140',
		textDecoration: 'none',
		borderRadius: '6px',
		fontWeight: '600',
		fontSize: '13px',
		transition: 'all 0.3s ease',
		':hover': {
			background: '#f8f9fa',
			transform: 'translateY(-1px)',
			boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
		},
		'@media only screen and (max-width: 480px)': {
			padding: '8px 16px',
			fontSize: '12px',
			width: '100%',
			justifyContent: 'center',
		},
	},
	secondaryButton: {
		display: 'flex',
		alignItems: 'center',
		gap: '6px',
		padding: '10px 20px',
		background: 'transparent',
		color: '#fff',
		textDecoration: 'none',
		borderRadius: '6px',
		fontWeight: '600',
		fontSize: '13px',
		border: '2px solid rgba(255, 255, 255, 0.3)',
		transition: 'all 0.3s ease',
		':hover': {
			background: 'rgba(255, 255, 255, 0.1)',
			borderColor: 'rgba(255, 255, 255, 0.5)',
			transform: 'translateY(-1px)',
		},
		'@media only screen and (max-width: 480px)': {
			padding: '8px 16px',
			fontSize: '12px',
			width: '100%',
			justifyContent: 'center',
		},
	},
	buttonIcon: {
		fontSize: '12px',
		'@media only screen and (max-width: 480px)': {
			fontSize: '11px',
		},
	},
});

export default Contact;