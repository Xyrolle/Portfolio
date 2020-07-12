import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { Icon } from '@iconify/react';
import linkedinRect from '@iconify/icons-brandico/linkedin-rect';
import githubIcon from '@iconify/icons-bytesize/github';
import mail4Icon from '@iconify/icons-icomoon-free/mail4';

import '../styles/ContactMe.scss';

const ContactMe = () => {
	const contactMe = useRef(null);

	useEffect(() => {
		gsap.to('.fade', 1, {
			opacity : 1,
			y       : 100,
			ease    : 'back.out(1.7)',
			stagger : {
				amount : 0.05
			}
		});
	}, []);

	return (
		<div className='contact-me' ref={contactMe}>
			<h2 className='fade'>Feel free to reach out to me</h2>
			<div className='icons fade'>
				<a href='https://www.linkedin.com/in/serghei-hmeli-59aa43172/'>
					<Icon icon={linkedinRect} />
				</a>
				<a href='https://github.com/Xyrolle'>
					<Icon icon={githubIcon} />
				</a>
				<a href='mailto:serii.hmeli123123@mail.ru'>
					<Icon icon={mail4Icon} />
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
