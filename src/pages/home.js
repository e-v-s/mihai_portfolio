import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import CardSolution from '../components/workIcons.js';

import turbineWheelIcon from '../images/turbineWheel.png';
import electricIcon from '../images/power-line-connected-towers.png';
import oilAndGasIcon from '../images/oilandgas.png';
import vibrationIcon from '../images/equalizer.png';
import locationIcon from '../images/location.png';

function Home() {
	return (
		<div>
			<h1 className={css(style.titleBig)}>Welcome</h1>
			<p className={css(style.lineBig)}></p>
			<div>
				<div style={{display: 'inline', float: 'left'}}>
					<img 
						className={css(style.locationIcon)} 
						src={locationIcon} 
						alt="Location icon"
						style={{float: 'left'}}
					/>
					<div>
					<p>Based in Ecuador</p>
					<p>Working worldwide</p>
					</div>
				</div>
				<p className={css(style.text)}>
					I'm Mihai Gherman, an Automation Engineer focused on Turbine Controls and Industrial Control Systems. <br></br>I have been involved with Automation and the SCADA Industrial Systems even before University graduation, and been working for more than 12 years as a Project Engineer, System Integrator, SCADA/PLC specialist. <br></br>I'm certified with various control systems brands and electrical norms like IEC 61850 and ISO certified Cat. II Vibration Analyst.
				</p>
			</div>
			<p className={css(style.line)}></p>
			<h2 className={css(style.subtitle)}>Services</h2>
			<section className={css(style.solutionsSection)}>
				<CardSolution
					alt="Turbine wheel"
					className={css(style.icon)}
					src={turbineWheelIcon}
					titleStyle={css(style.title)}
					text="Turbine Control Systems"
					cardStyle={css(style.cardStyle)}
				/>
				<CardSolution 
					alt="Tool"
					className={css(style.icon)}
					src={electricIcon}
					titleStyle={css(style.title)}
					text="Electrical Substation Automation"
					cardStyle={css(style.cardStyle)}
				/>
				<CardSolution 
					alt="Paper"
					className={css(style.icon)}
					src={oilAndGasIcon}
					titleStyle={css(style.title)}
					text="Oil&Gas Control Systems"
					cardStyle={css(style.cardStyle)}
				/>
				<CardSolution 
					alt="Paper"
					className={css(style.icon)}
					src={vibrationIcon}
					titleStyle={css(style.title)}
					text="Vibration Analysis"
					cardStyle={css(style.cardStyle)}
				/>
			</section>
			<p className={css(style.line)}></p>
			<h2 className={css(style.subtitle)}>Costumers</h2>
		</div>
	)
}

const style = StyleSheet.create({
	solutionsSection: {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: '80px',
		'@media only screen and (max-width: 1020px)': {
			flexDirection: 'column',
		}
	},
	cardStyle: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '30px',
		border: '1px solid #D7D7D9',
		borderRadius: '10px',
		'@media only screen and (max-width: 1020px)': {
			marginBottom: '20px',
		}
	},
	titleBig: {
		textAlign: 'center',
		color: '#1C3240',
		fontWeight: '300',
		paddingBottom: '30px',
		fontFamily: `'Roboto', sans-serif`,
		fontSize: '50px',
		margin: '10px auto',
		textTransform: 'uppercase',
	},
	lineBig: {
		width: '70%',
		borderBottom: '2px solid #1C3240',
		margin: '0 auto 50px',
		'@media only screen and (max-width: 600px)': {
      width: '100%',
    }
	},
	locationIcon: {
		width: '30px',
	},
	subtitle: {
		textAlign: 'center',
		color: '#1C3240',
		fontWeight: '300',
		paddingBottom: '30px',
		fontFamily: `'Roboto', sans-serif`,
		fontSize: '30px',
		width: '70%',
		margin: '60px auto',
		textTransform: 'uppercase',
	},
	text: {
		margin: '0 auto 40px',
		textAlign: 'center',
		width: '60%',
		lineHeight: '30px',
		fontSize: '16px',
		fontFamily: `'Roboto', sans-serif`,
		'@media only screen and (max-width: 600px)': {
			width: '100%',
			fontSize: '18px',
			textAlign: 'justify',
		}
	},
	line: {
		width: '30%',
		borderBottom: '2px solid #D7D7D9',
		margin: '0 auto 60px',
	},
	icon: {
		width: '100px',
		filter: 'invert(26%) sepia(54%) saturate(612%) hue-rotate(153deg) brightness(96%) contrast(60%)',
		cursor: 'pointer',
		padding: '20px',
		':hover': {
			filter: 'invert(31%) sepia(34%) saturate(354%) hue-rotate(137deg) brightness(90%) contrast(93%)',
		}
	},
	title: {
		fontSize: '14px',
		fontFamily: `'Roboto', sans-serif`,
		fontWeight: '400',
		color: '#031940',
		'@media only screen and (max-width: 600px)': {
			fontSize: '20px',
			lineHeight: '30px',
			textAlign: 'center',
		}
	}
});

export default Home;
