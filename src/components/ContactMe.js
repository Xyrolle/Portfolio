import React from 'react';

import { Icon } from '@iconify/react';
import linkedinRect from '@iconify/icons-brandico/linkedin-rect';
import githubIcon from '@iconify/icons-bytesize/github';
import mail4Icon from '@iconify/icons-icomoon-free/mail4';

import '../styles/ContactMe.scss';

const ContactMe = () => {
	return (
		<div className='contact-me'>
			<p>Feel free to reach out to me</p>
			<div className='icons'>
				<a href='https://www.linkedin.com/in/serghei-hmeli-59aa43172/'>
					<Icon icon={linkedinRect} />
				</a>
				<a href='https://github.com/Xyrolle'>
					<Icon icon={githubIcon} />
				</a>
				<a href='mailto:email@email.de'>
					<Icon icon={mail4Icon} />
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
