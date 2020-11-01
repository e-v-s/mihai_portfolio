import { StyleSheet, css } from 'aphrodite';
import React from 'react';

function Contact() {
	return(
		<>
			<ul>
				<li>
					<p>Linkedin</p>
				</li>
				<li>
					<p>Email</p>
				</li>
				<li>
					<p>Whatsapp</p>
				</li>
			</ul>
			Or... if you want to, through here:
			<form className={css(style.form)}>
				<input className={css(style.input)} type="text" placeholder="Name" />
				<input className={css(style.input)} type="text" placeholder="E-mail" />
				<textarea className={css(style.input)} type="texta" rols="10" columns="10" placeholder="Enter your message here..." />
				<button className={css(style.buttonSend)}>Send</button>
			</form>
		</>
	)
}

const style = StyleSheet.create({
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '70%',
		margin: '20px auto',
	},
	input: {
		marginTop: '10px',
		border: 'none',
		borderBottom: '1px solid #000',
	},
	buttonSend: {
		width: '100px',
		marginTop: '20px',
		borderRadius: '40px',
		padding: '5px 15px',
		outline: 'none',
		border: '2px solid #BF9004',
		backgroundColor: 'rgba(0,0,0,.8)',
		color: '#BF9004',
		fontWeight: '500',
		fontFamily: `'Noto Sans JP', sans-serif`,
	}
})

export default Contact;