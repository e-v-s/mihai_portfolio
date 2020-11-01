import { StyleSheet, css } from 'aphrodite';
import React from 'react';

function About() {
	return(
		<div className={css(style.page)}>
			<h1 className={css(style.title)}>About me...</h1>
			<p className={css(style.text)}>Hi, I'm <b>Mihai Gherman</b> and I've been involved with Automation and the SCADA Industry even before University graduation, I've been working for more than 10 years as a Project Engineer, System Integrator, SCADA/PLC and ADMS specialist. The last 9 years were in the Oil&Gas and Electrical Industries.</p>

			<p className={css(style.text)}>In the last years I started focusing on Turbine Controls Systems, and worked as Lead Programmer on more than 5 Gas Turbines with <i>Woodward and Allen Bradley Controls</i>.</p>
			
			<p className={css(style.text)}>Working in the Oil&Gas industry as a member of expert engineering teams, designing/customizing and implementing complete control systems, brought me a good grasp of many of the aspects and involved processes of the daily Oil&Gas operations and the required automation and control systems.</p>
			
			<p className={css(style.text)}>During these years, I had the opportunity to work in several multi-million projects all over the world. Due to the geographical and cultural diversity of the projects I was involved, I've gained valuable experience and could adapt myself to various working conditions. I enjoy working as part of a team, always trying to complete the tasks in the time frame requested and deliver the required quality expected.</p>
			
			<p className={css(style.text)}>I'm proficient with communication protocols such as Modbus, IEC 60870-5-101, IEC 60870-5-104, IEC 61850, ControlNet, EthernetIP and OPC among others and with industry specific platforms/applications that offer support for these protocols. I have a good overview and all-round knowledge of different PLCs and SCADA/DCS/ADMS system components and brands. Proficient with all the PLC programming languages specified in the IEC 1131-3 standard.</p>
			
			<p className={css(style.text)}>Part of my work consists of developing solutions, troubleshooting and providing support for large scale control projects, dealing with providers and offering customers consultancy. During the development of the projects I had to write communication drivers and customized applications for these protocols, mostly Modbus and OPC. Also, I was in charge of the design and implementation of several integration projects, between various customers SCADA and third party DCS systems, such as the integration of compressor stations, power generation and distribution.</p>
		</div>
	)
}

const style = StyleSheet.create({
	page: {
		display: 'inline',
	},
	title: {
		fontFamily: `'Roboto', sans-serif`,
		textTransform: 'uppercase',
		border: '1px solid #000',
		width: '150px',
		padding: '30px 10px',
		textAlign: 'center',
		float: 'left',
		margin: '20px',
	},
	text: {
		fontFamily: `'Roboto', sans-serif`,
		textAlign: 'justify',
		lineHeight: '24px'
	}
});

export default About;