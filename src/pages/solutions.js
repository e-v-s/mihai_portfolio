import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import turbineWheelIcon from '../images/turbineWheel.png';
import electricIcon from '../images/power-line-connected-towers.png';
import oilAndGasIcon from '../images/oilandgas.png';
import vibrationIcon from '../images/equalizer.png';


function Solutions(props) {
	return (
		<>
			<div className={css(style.solutionLeft)} id="sol_1">
				<img className={css(style.icon)} alt="turbine wheel" src={turbineWheelIcon} />
				<div>
					<h2 className={css(style.titleLeft)}>Turbine Control Systems</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
			</div>
			<div className={css(style.solutionRight)} id="sol_2">
				<img className={css(style.icon)} alt="turbine wheel" src={electricIcon} />
				<div className={css(style.text && style.right)}>
					<h2 className={css(style.titleRight)}>Electrical Substation Automation</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
			</div>
			<div className={css(style.solutionLeft)} id="sol_3">
				<img className={css(style.icon)} alt="turbine wheel" src={oilAndGasIcon} />
				<div>
					<h2 className={css(style.titleLeft)}>Oil&Gas Control Systems</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
			</div>
			<div className={css(style.solutionRight)} id="sol_4">
				<img className={css(style.icon)} alt="turbine wheel" src={vibrationIcon} />
				<div className={css(style.text && style.right)}>
					<h2 className={css(style.titleRight)}>Vibration Analysis</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
			</div>
		</>
	)
}

const style = StyleSheet.create({
	solutionLeft: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: `'Roboto', sans-serif`,
		lineHeight: '22px',
		width: '80%',
		margin: '30px auto',
		'@media only screen and (min-width: 600px)': {
			flexDirection: 'row',
			alignItems: 'center',
		}
	},
	solutionRight: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: `'Roboto', sans-serif`,
		lineHeight: '22px',
		width: '80%',
		margin: '30px auto',
		'@media only screen and (min-width: 600px)': {
			flexDirection: 'row-reverse',
			alignItems: 'center',
		}
	},
	titleLeft: {
		color: '#031940',
		textAlign: 'center',
		'@media only screen and (min-width: 600px)': {
			textAlign: 'left',
		}
	},
	titleRight: {
		color: '#031940',
		textAlign: 'center',
		'@media only screen and (min-width: 600px)': {
			textAlign: 'right',
		}
	},
	right: {
		'@media only screen and (min-width: 600px)': {
			textAlign: 'right',
		}
	},
	icon: {
		width: '180px',
		filter: 'invert(26%) sepia(54%) saturate(612%) hue-rotate(153deg) brightness(96%) contrast(60%)',
		padding: '20px',
		':hover': {
			filter: 'invert(31%) sepia(34%) saturate(354%) hue-rotate(137deg) brightness(90%) contrast(93%)',
		}
	}
});

export default Solutions;
