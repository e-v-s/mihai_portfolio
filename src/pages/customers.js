import React, { useEffect, memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHammer, faCog, faHardHat } from '@fortawesome/free-solid-svg-icons';

const Customers = memo(function Customers() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={css(style.container)}>
			<div className={css(style.content)}>
				<div className={css(style.iconContainer)}>
					<FontAwesomeIcon 
						icon={faHardHat} 
						className={css(style.mainIcon)}
					/>
				</div>
				
				<h1 className={css(style.title)}>Under Construction</h1>
				
				<p className={css(style.subtitle)}>
					We're building something amazing for you!
				</p>
				
				<div className={css(style.description)}>
					<p>
						Our customers page is currently being developed to showcase the amazing 
						companies and organizations I've had the privilege to work with.
					</p>
					<p>
						From energy giants to innovative startups, this section will highlight 
						the diverse range of projects and partnerships that have shaped my 
						expertise in instrumentation and control engineering.
					</p>
				</div>

				<div className={css(style.toolsContainer)}>
					<div className={css(style.toolItem)}>
						<FontAwesomeIcon icon={faTools} className={css(style.toolIcon)} />
						<span>Designing</span>
					</div>
					<div className={css(style.toolItem)}>
						<FontAwesomeIcon icon={faHammer} className={css(style.toolIcon)} />
						<span>Building</span>
					</div>
					<div className={css(style.toolItem)}>
						<FontAwesomeIcon icon={faCog} className={css(style.toolIcon)} />
						<span>Optimizing</span>
					</div>
				</div>

				<div className={css(style.progressContainer)}>
					<div className={css(style.progressBar)}>
						<div className={css(style.progressFill)}></div>
					</div>
					<p className={css(style.progressText)}>Progress: 65%</p>
				</div>

				<div className={css(style.ctaContainer)}>
					<p className={css(style.ctaText)}>
						In the meantime, feel free to explore my other sections or 
						<a href="mailto:mihai@mgtech.me" className={css(style.ctaLink)}> get in touch </a> 
						to discuss your project requirements.
					</p>
				</div>
			</div>
		</div>
	);
});

const style = StyleSheet.create({
	container: {
		minHeight: '80vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '40px 20px',
		background: '#F2F2F2',
		fontFamily: `'Source Sans Pro', 'Arial', sans-serif`,
	},
	content: {
		maxWidth: '800px',
		textAlign: 'center',
		background: 'rgba(255, 255, 255, 0.95)',
		padding: '60px 40px',
		borderRadius: '20px',
		boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
		backdropFilter: 'blur(10px)',
		border: '1px solid rgba(255, 255, 255, 0.2)',
	},
	iconContainer: {
		marginBottom: '30px',
	},
	mainIcon: {
		fontSize: '80px',
		color: '#011140',
		animation: 'pulse 2s infinite',
		'@keyframes pulse': {
			'0%': {
				transform: 'scale(1)',
				opacity: '1',
			},
			'50%': {
				transform: 'scale(1.1)',
				opacity: '0.8',
			},
			'100%': {
				transform: 'scale(1)',
				opacity: '1',
			},
		},
	},
	title: {
		fontSize: '48px',
		fontWeight: '600',
		color: '#011140',
		marginBottom: '20px',
		fontFamily: `'Inter', 'Arial', sans-serif`,
		'@media only screen and (max-width: 600px)': {
			fontSize: '36px',
		},
	},
	subtitle: {
		fontSize: '24px',
		color: '#405B73',
		marginBottom: '30px',
		fontWeight: '300',
		'@media only screen and (max-width: 600px)': {
			fontSize: '20px',
		},
	},
	description: {
		marginBottom: '40px',
		lineHeight: '1.8',
		color: '#666',
		fontSize: '16px',
		'@media only screen and (max-width: 600px)': {
			fontSize: '14px',
		},
	},
	toolsContainer: {
		display: 'flex',
		justifyContent: 'center',
		gap: '40px',
		marginBottom: '40px',
		flexWrap: 'wrap',
		'@media only screen and (max-width: 600px)': {
			gap: '20px',
		},
	},
	toolItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '10px',
		padding: '20px',
		background: 'rgba(1, 17, 64, 0.05)',
		borderRadius: '15px',
		minWidth: '100px',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		':hover': {
			transform: 'translateY(-5px)',
			boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
		},
	},
	toolIcon: {
		fontSize: '24px',
		color: '#011140',
		animation: 'spin 3s linear infinite',
		'@keyframes spin': {
			'0%': {
				transform: 'rotate(0deg)',
			},
			'100%': {
				transform: 'rotate(360deg)',
			},
		},
	},
	progressContainer: {
		marginBottom: '40px',
	},
	progressBar: {
		width: '100%',
		height: '8px',
		background: '#e0e0e0',
		borderRadius: '4px',
		overflow: 'hidden',
		marginBottom: '15px',
	},
	progressFill: {
		height: '100%',
		width: '65%',
		background: 'linear-gradient(90deg, #011140 0%, #405B73 100%)',
		borderRadius: '4px',
		animation: 'progress 2s ease-in-out',
		'@keyframes progress': {
			'0%': {
				width: '0%',
			},
			'100%': {
				width: '65%',
			},
		},
	},
	progressText: {
		fontSize: '14px',
		color: '#666',
		fontWeight: '500',
	},
	ctaContainer: {
		padding: '30px',
		background: 'rgba(1, 17, 64, 0.05)',
		borderRadius: '15px',
		border: '2px dashed #011140',
	},
	ctaText: {
		fontSize: '16px',
		color: '#333',
		lineHeight: '1.6',
		margin: '0',
	},
	ctaLink: {
		color: '#011140',
		textDecoration: 'none',
		fontWeight: '600',
		transition: 'color 0.3s ease',
		':hover': {
			color: '#405B73',
			textDecoration: 'underline',
		},
	},
});

export default Customers;