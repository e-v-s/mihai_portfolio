import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import Customers from '../components/customers.js';

import turbineWheelIcon from '../images/turbineWheel.png';
import electricIcon from '../images/power-line-connected-towers.png';
import oilAndGasIcon from '../images/oilandgas.png';
import vibrationIcon from '../images/equalizer.png';
import locationIcon from '../images/location.png';
import snamLogo from '../images/snam-logo.png';
import schneiderLogo from '../images/schneider-logo.png';
import gazDeFranceLogo from '../images/gaz-de-france-logo.png';
import petroamazonasLogo from '../images/petroamazonas-logo.png';
import repsolLogo from '../images/repsol-logo.png';
import pemexLogo from '../images/pemex-logo.png';
import petroecuadorLogo from '../images/petroecuador-logo.png';

function Home() {
	return (
		<div>
			<h1 className={css(style.titleBig)}>Welcome</h1>
			<p className={css(style.lineBig)}></p>
			<div className={css(style.homeText)}>
				<div className={css(style.basedInElement)}>
					<img 
						className={css(style.locationIcon)} 
						src={locationIcon} 
						alt="Location icon"
						style={{float: 'left', margin: '10px'}}
					/>
					<div>
					<p style={{textAlign: 'center'}}>Based in Ecuador</p>
					<p style={{textAlign: 'center'}}>Working worldwide</p>
					</div>
				</div>
				<p className={css(style.text)}>
					I'm Mihai Gherman, Intrumentation and Control Engineer working as an independent contractor in the Energy Industry. Experienced with a variety of systems and processes, from gas turbines controls and electrical substation automation to SIL based security systems.<br></br><br></br>
					Former employee of Telvent / Schneider Electric in the Energy Dept., I am an expert in OASyS DNA SCADA, including ADMS and Liquid Management Systems. For the last 6 years I worked as an independent contractor specialized in power generation projects. <br></br><br></br>
					Also, I am a proud ISO certified CAT II Vibration Analyst. A very good asset when commissioning gas turbines, generators and overall in the Oil & Gas Industry.
				</p>
			</div>
			<p className={css(style.line)}></p>
			<h2 className={css(style.subtitle)}>Services</h2>
			<section className={css(style.solutionsSection)}>
				<Flippy 
					flipOnHover={false} // default false
					flipOnClick={true}
					flipDirection="horizontal"
					style={{margin:'20px'}} 
				>
					<FrontSide 
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							padding: '30px',
							border: '1px solid #D7D7D9',
							borderRadius: '10px',
							cursor: 'pointer',
							boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
						}}>
							<img 
								alt="turbine wheel figure"
								className={css(style.icon)} 
								src={turbineWheelIcon} 
							/>
							<h2 className={css(style.title)}>Turbine Control Systems for Aeroderivative and Heavy Duty Gas Turbines</h2>
					</FrontSide>
					<BackSide style={{borderRadius: '10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>					
						<ul className={css(style.card)} >
							<li className={css(style.cardItem)} >
								Development of Governor or Complete Control Logic<sup>*</sup>
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Migration from Legacy Systems<sup>*</sup>
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Gas Turbines Commissioning / Start-ups
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Consulting
							</li>
						</ul>
						<p style={{textAlign: 'justify', fontSize: '10px'}}>* For all major brands of Controllers / DCS systems</p>
					</BackSide>
				</Flippy>
				<Flippy 
					flipOnHover={false} // default false
					flipOnClick={true}
					flipDirection="horizontal"
					style={{margin:'20px'}} 
				>
					<FrontSide 
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							padding: '30px',
							border: '1px solid #D7D7D9',
							borderRadius: '10px',
							cursor: 'pointer',
							boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
						}}>
							<img alt="" className={css(style.icon)} src={electricIcon} />
							<h2 className={css(style.title)}>Electrical Substation Automation</h2>
					</FrontSide>
					<BackSide style={{borderRadius: '10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>					
						<ul className={css(style.card)} >
							<li className={css(style.cardItem)} >
								Engineering according to NER and IEC norms
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Implementation of digital control systems
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Integration of substation for most SCADA / DCS systems 
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Migration from legacy systems
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Commissioning
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Consulting
							</li>
						</ul>
					</BackSide>
				</Flippy>
				<Flippy 
					flipOnHover={false} // default false
					flipOnClick={true}
					flipDirection="horizontal"
					style={{margin:'20px'}} 
				>
					<FrontSide 
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							padding: '30px',
							border: '1px solid #D7D7D9',
							borderRadius: '10px',
							cursor: 'pointer',
							boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
						}}>
							<img className={css(style.icon)} src={oilAndGasIcon} />
							<h2 className={css(style.title)}>Oil&Gas Control Systems</h2>
					</FrontSide>
					<BackSide style={{borderRadius: '10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>					
						<ul className={css(style.card)} >
							<li className={css(style.cardItem)} >
								Engineering of Industrial Control Systems
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Development of custom SCADA/DCS applications
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Migration from legacy systems
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Commissioning
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Consulting
							</li>
						</ul>
					</BackSide>
				</Flippy>
				<Flippy 
					flipOnHover={false} // default false
					flipOnClick={true}
					flipDirection="horizontal"
					style={{margin:'20px'}} 
				>
					<FrontSide 
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							padding: '30px',
							border: '1px solid #D7D7D9',
							borderRadius: '10px',
							cursor: 'pointer',
							boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
						}}>
							<img className={css(style.icon)} src={vibrationIcon} />
							<h2 className={css(style.title)}>Vibration Analysis</h2>
					</FrontSide>
					<BackSide style={{borderRadius: '10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>					
						<ul className={css(style.card)} >
							<li className={css(style.cardItem)} >
								Performing Vibration Analysis on rotary equipment
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Data Acquisition of rotary equipment
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Design / Engineering of fixed monitoring and protection systems
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Migration from legacy systems
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Commissioning
							</li>
							<div className={css(style.cardItemDiv)}></div>
							<li className={css(style.cardItem)}>
								Consulting
							</li>
						</ul>
					</BackSide>
				</Flippy>
			</section>
			<p className={css(style.line)}></p>
			<h2 className={css(style.subtitle)}>Customers</h2>
			<div>
				<Customers 
					src={snamLogo} 
					alt="snam logo"
					className={css(style.costumersLogo)}
				/>
				<Customers 
					src={schneiderLogo} 
					alt="schneider logo"
					className={css(style.costumersLogo)}
				/>
			</div>
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
	basedInElement: {
		display: 'flex',
		flexDirection: 'column',
		float: 'left',
		width: '200px',
		order: '2',
		alignItems: 'center',
		'@media only screen and (min-width: 600px)': {
			float: 'right',
			marginRight: '-60px',
			fontSize: '14px',
			width: '180px',
		}
	},
	homeText: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: '40px',
		'@media only screen and (min-width: 600px)': {
			display: 'block'
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
		width: '180px',
		filter: 'invert(26%) sepia(54%) saturate(612%) hue-rotate(153deg) brightness(96%) contrast(60%)',
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
		textAlign: 'center',
		'@media only screen and (max-width: 600px)': {
			fontSize: '20px',
			lineHeight: '30px',
		}
	},
	card: {
		listStyle: 'none',
		margin: '0 auto',
		paddingLeft: '0px',
		textAlign: 'center',
	},
	cardItem: {
		fontSize: '14px',
		textAlign: 'center',
		lineHeight: '20px'
	},
	cardItemDiv: {
		'width': '60%',
		border: '1px solid #D7D7D9',
		margin: '5px auto'
	},
	costumersLogo: {
		width: '100px',
		padding: '30px',
	}
});

export default Home;
