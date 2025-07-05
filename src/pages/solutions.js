import React, { useEffect, memo } from 'react';
import { css, StyleSheet } from 'aphrodite';

import turbineWheelIcon from '../images/turbineWheel.png';
import electricIcon from '../images/power-line-connected-towers.png';
import oilAndGasIcon from '../images/oilandgas.png';
import vibrationIcon from '../images/equalizer.png';

const Solutions = memo(function Solutions(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className={css(style.solutionLeft)} id="sol_1">
				<img className={css(style.icon)} alt="turbine wheel" src={turbineWheelIcon} />
				<div>
					<h2 className={css(style.titleLeft)}>Turbine Control Systems</h2>
					<p>
						Specialized in advanced control systems for both aeroderivative and heavy-duty gas turbines, 
						I provide comprehensive solutions that ensure optimal performance, reliability, and efficiency. 
						My expertise spans the development of sophisticated governor control logic and complete control 
						systems for all major turbine manufacturers including GE, Siemens, and Mitsubishi.
					</p>
					<p>
						With over a decade of experience in turbine commissioning and start-ups, I've successfully 
						managed complex projects across power generation facilities worldwide. My services include 
						migration from legacy control systems to modern DCS platforms, custom control logic development, 
						and performance optimization to maximize turbine efficiency and reduce operational costs.
					</p>
				</div>
			</div>
			<div className={css(style.solutionRight)} id="sol_2">
				<img className={css(style.icon)} alt="electrical substation" src={electricIcon} />
				<div className={css(style.text && style.right)}>
					<h2 className={css(style.titleRight)}>Electrical Substation Automation</h2>
					<p>
						Delivering cutting-edge automation solutions for electrical substations that meet the highest 
						industry standards. My expertise encompasses the complete spectrum of substation automation, 
						from initial engineering design to final commissioning, ensuring compliance with NER and IEC 
						standards while implementing the latest digital control technologies.
					</p>
					<p>
						I specialize in the integration of intelligent electronic devices (IEDs), protection systems, 
						and SCADA communications using protocols such as IEC 61850, Modbus, and DNP3. My solutions 
						enable real-time monitoring, advanced protection schemes, and seamless integration with 
						existing power management systems, providing utilities with enhanced operational visibility 
						and control.
					</p>
				</div>
			</div>
			<div className={css(style.solutionLeft)} id="sol_3">
				<img className={css(style.icon)} alt="oil and gas" src={oilAndGasIcon} />
				<div>
					<h2 className={css(style.titleLeft)}>Oil&Gas Control Systems</h2>
					<p>
						Comprehensive control system solutions for the oil and gas industry, designed to meet the 
						demanding requirements of upstream, midstream, and downstream operations. My expertise covers 
						the full lifecycle of industrial control systems, from initial concept and design to 
						implementation, commissioning, and ongoing support.
					</p>
					<p>
						I develop custom SCADA and DCS applications that provide real-time monitoring and control 
						of critical processes, ensuring safety, efficiency, and regulatory compliance. My solutions 
						include advanced alarm management, historical data collection, and integration with enterprise 
						systems, enabling operators to make informed decisions and optimize production while maintaining 
						the highest safety standards.
					</p>
				</div>
			</div>
			<div className={css(style.solutionRight)} id="sol_4">
				<img className={css(style.icon)} alt="vibration analysis" src={vibrationIcon} />
				<div className={css(style.text && style.right)}>
					<h2 className={css(style.titleRight)}>Vibration Analysis</h2>
					<p>
						As an ISO certified CAT II Vibration Analyst, I provide expert vibration analysis services 
						for critical rotating equipment in power generation and industrial applications. My specialized 
						knowledge helps identify potential equipment failures before they occur, enabling predictive 
						maintenance strategies that minimize downtime and reduce operational costs.
					</p>
					<p>
						My services include comprehensive vibration data acquisition, analysis, and reporting for 
						gas turbines, generators, pumps, compressors, and other critical machinery. I design and 
						implement permanent monitoring systems that provide continuous equipment health assessment, 
						and develop maintenance recommendations based on vibration signatures and industry best practices.
					</p>
				</div>
			</div>
		</>
	)
});

const style = StyleSheet.create({
	solutionLeft: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: `'Source Sans Pro', 'Arial', sans-serif`,
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
		fontFamily: `'Source Sans Pro', 'Arial', sans-serif`,
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
		fontFamily: `'Inter', 'Arial', sans-serif`,
		textAlign: 'center',
		'@media only screen and (min-width: 600px)': {
			textAlign: 'left',
		}
	},
	titleRight: {
		color: '#031940',
		fontFamily: `'Inter', 'Arial', sans-serif`,
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
