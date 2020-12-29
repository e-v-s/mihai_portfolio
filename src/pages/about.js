import { StyleSheet, css } from 'aphrodite';
import React, { useEffect } from 'react';

function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, []);

	return(
		<div className={css(style.page)}>
			<p className={css(style.text)}>
				I graduated as an Electrical Engineer at the Technical Univeristy of Köln (Cologne) in Germany in 2005. Have been involved with the Automation and SCADA Industry before University graduation and been working more than 10 years as Project Engineer, System Integrator, SCADA/PLC and ADMS specialist. The last 10 years were in the Oil&Gas and Utilities Industries.
			</p>
			<p className={css(style.text)}>
				Working in the Oil&Gas industry as a member of expert engineering teams designing/customizing and implementing complete control systems, I could gain a good grasp of many of the aspects and involved processes of the daily Oil&Gas operations and the required automation and control systems.
			</p>
			<p className={css(style.text)}>
				During these years, I had the opportunity to work in several multi-million projects all over the world. Due to the geographical and cultural diversity of the projects I was involved, I could gain valuable experience and adapt myself to various working conditions. I enjoy working as part of a team, always trying to complete the tasks in the time frame requested and to deliver the required quality expected in the O&G/Electrical industry.
			</p>
			<p className={css(style.text)}>
				Proficient with communication protocols such as Modbus, IEC 60870-5-101, IEC 60870-5-104, IEC 61850, ControlNet, EthernetIP and OPC among others and with industry specific platforms/applications that offer support for these protocols. I have a good overview and all-round knowledge of different PLCs and SCADA/DCS/ADMS system components and brands. Proficient with all the PLC programming languages specified in the IEC 1131-3 standard.
			</p>
			<p className={css(style.text)}>
				Part of my work consists of developing solutions, troubleshooting and providing support for large scale control projects, dealing with providers and offering customers consultancy. During the development of the projects I had to write communication drivers and customized applications for these protocols, mostly Modbus and OPC. Also, I was in charge of the design and implementation of several integration projects, between various customers SCADA and third party DCS systems, such as the integration of compressor stations, power generation and distribution.
			</p>
			<p className={css(style.text)}>
				Since 2013 I work as an Independent Contractor in projects related to electrical and process Industrial Control Systems design and implementation, InTouch and OASyS DNA SCADA system maintenance and integration, Safety PLC programming.
			</p>
			<p className={css(style.text)}>
				In the last years I started focusing on Turbine Controls System, have worked as Lead Programmer on several gas turbines projects with Woodward and Allen Bradley Controls.
			</p>
			<div className={css(style.textDiv)}></div>
		</div>
	)
}

const style = StyleSheet.create({
	page: {
		display: 'inline',
	},
	text: {
		fontFamily: `'Roboto', sans-serif`,
		textAlign: 'left',
		lineHeight: '30px',
		width: '90%',
		margin: '0 auto',
		marginBottom: '30px',
		color: '#031940',
		fontSize: '18px',
		'@media only screen and (min-width: 600px)': {
			textIndent: '4em',
			width: '70%',
		}
	},
	textDiv: {
		'width': '60%',
		borderBottom: '5px solid #D7D7D9',
		margin: '60px auto'
	}
});

export default About;