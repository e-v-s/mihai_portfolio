import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Curricula from '../components/curricula.js';

import University from '../images/logo.png';
import UniversityCluj from '../images/utcn.png';

const Work = (props) => {
	let template = 
	<section>
		<div>
			<div style={{ fontSize: '14px', width: '200px', textAlign: 'center', paddingLeft: '30px' }}>
				<h1 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '400', fontSize: '30px', marginBottom: '0'}}>Automation</h1>
				&
				<h1 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '400', fontSize: '30px', marginTop: '0'}}>scada engineer</h1>
			</div>
			<p style={{ width: '80%', padding: '0 50px', fontSize: '14px', fontFamily: 'arial' }}>
				Since 2014 I've been working as a freelancer in projects related to electrical and process <span style={{ fontWeight: 'bold'}}>Industrial Control Systems design and implementation</span>, InTouch and OASyS DNA SCADA system maintenance and integrations, Safety PLC programming.

				<p>Lead Programmer and Solution Designer for Gas Turbines Control Systems.</p>
				
				<p>In charge of the SCADA Integration for more than 7 Electrical Generation Plants and for several distribution and transmissions stations.</p>
				
				Team Leader of the <span style={{fontWeight: 'bold'}}>REPSOL Ecuador SCADA System Maintenance</span>.
				
				SCADA Consultat for the <b>BEP Bunde-Etzel-Pipelinegesellschaft mbH & Co. KG</b> (Germany)
				
				Available to work internationally.	
			</p>
		</div>
		<div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
				<p style={{ fontFamily: `'Open Sans Condensed', sans-serif`, fontSize: '20px', width: '80%', textAlign: 'center', padding: '0 50px 0 30px' }}>What I did from 2013 until 2014 in Ecuador at <i>Proyectos Integrales del Ecuador PIL S.A.</i></p>
				<p style={{ fontFamily: 'arial'}}>I worked as a project engineer in Automation Projects for the Oil&Gas and Electrical Industries</p>
				<div style={{textAlign: 'center', padding: '0 50px 0 30px', width: '70%'}}>
					<h1 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '400', fontSize: '30px', marginBottom: '0'}}>Automation</h1>
					&
					<h1 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '400', fontSize: '30px', marginTop: '0', marginBottom: '0'}}>scada engineer</h1>
					<h4 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '800', textAlign: 'center', padding: '0 50px'}}>PIL S.A.</h4>
				</div>
		</div>
		<div>
			<div style={{ fontSize: '14px', width: '200px', textAlign: 'center' }}>
				<h1 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '400', fontSize: '30px', marginBottom: '0'}}>scada project engineer</h1>
				<h4 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '800', textAlign: 'center', padding: '0 50px 30px', lineHeight: '20px'}}>Schneider Electric</h4>
			</div>
			<p style={{ width: '400px', padding: '0 10px', fontFamily: 'arial' }}>
				In <b>Spain</b>, I worked as a SCADA and Automation Project Tech Leader in <i>Schneider Electric (Former Telvent)</i> from 2013 until 2014.
			</p>
		</div>
		<div style={{display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'center'}}>
			<p style={{ width: '400px', padding: '0 10px', fontFamily: 'arial' }}>
				From 2008 until 2010, also in Spain, I worked as a SCADA Engineer, System Integrator and Software Developer in <i>Telvent</i>.
			</p>
			<div style={{ fontSize: '14px', width: '200px', textAlign: 'center' }}>
				<h1 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '400', fontSize: '30px', paddingTop: '30px', marginBottom: '0'}}>scada engineer</h1>
				<h4 style={{fontFamily: `'Open Sans Condensed', sans-serif`, textTransform: 'uppercase', fontWeight: '800', textAlign: 'center', padding: '0 50px 30px', lineHeight: '20px'}}>Televent</h4>
			</div>
		</div>
	</section>;

	if (props.curricula === 'experience') {
		return template;
	} else if (props.curricula === 'academic') {
		return template = 
		<section className={css(styleAcademic.section)}>
			<div className={css(styleAcademic.imgContainer)}>
				<img className={css(styleAcademic.img)} src={University} alt="University of Cologne Logo" />
				<p className={css(styleAcademic.text)} style={{textDecoration: 'underline'}}>Faculty of Information, Media and Electrical Engineering</p>
				<p className={css(styleAcademic.text)}>Telecommunication Engineering Degree</p>
				<p className={css(styleAcademic.text)}>2003 | 2006</p>
			</div>
			<div className={css(styleAcademic.imgContainer)}>
				<img className={css(styleAcademic.img)} src={UniversityCluj} alt="University of Cluj Napoca Logo" />
				<p className={css(styleAcademic.text)} style={{textDecoration: 'underline'}}>Faculty of Applied Electronics and Telecommunication</p>
				<p className={css(styleAcademic.text)}>1999 | 2003</p>
			</div>
		</section>;
	} else if (props.curricula === 'courses') {
		return template =<p>teste</p>
	}
	

	return (
		<div>
			{template}
		</div>	
	)
}

const styleAcademic = StyleSheet.create({
	section: {
		display: 'flex',
		justifyContent: 'space-around',
		marginTop: '80px',
		marginBottom: '60px',
		'@media only screen and (max-width: 800px)': {
			flexDirection: 'column',
			margin: '0 auto',
			marginBottom: '60px',
		},
	},
	img: {
		width: '150px',
		marginBottom: '20px',
		padding: '10px',
	},
	imgContainer: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		marginTop: '60px',
		width: '250px',
		padding: '10px',
	},
	text: {
		margin: '0',
		lineHeight: '21px',
		textAlign: 'center',
		fontFamily: 'arial',
		fontSize: '14px',
	}
});

export default Work;
// <Curricula text={props.curricula} />