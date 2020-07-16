import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { useIntersection } from 'use-intersection';
import { v4 as uuid_v4 } from 'uuid';

import { easeSlowIn, easeSlowOut, fadeIn, fadeOut } from '../utils/Animations';

import { Icon } from '@iconify/react';
import angleDoubleDown from '@iconify/icons-fa/angle-double-down';

import ProjectsSection from './ProjectsSection';

import '../styles/Page.scss';

const Page = () => {
	const sectionRef = useRef(null);
	const interestedSectionRef = useRef(null);

	const intersecting = useIntersection(sectionRef);
	const interestedIntersecting = useIntersection(interestedSectionRef);

	const { push } = useHistory();


		intersecting ? fadeIn('.fadeIn') :
		fadeOut('.fadeIn');


		interestedIntersecting ? easeSlowIn('.ease-slow') :
		easeSlowOut('.ease-slow');

	const points = [
		'I am a web developer, whose primary focus is front-end',
		'I am passionate about React and programming in general',
		'I am proficient in: CSS, SCSS, TypeScript, NodeJS, Express, jQuery, SQL and a lot more...',
		'I have good algorithm and data structure skills',
		'I know how to make UI tests and how to use React testing library',
		'I have experience making and working with Rest API’s',
		'I am a fast learner and good team player',
		'Current Position: Front-end Intern at EBS Integrator'
	];

	return (
		<div>
			<div id='header'>
				<div className='animated-title'>
					<div className='text-top'>
						<div>
							<span>Hmeli</span>
							<span>Serghei</span>
						</div>
					</div>
					<div className='text-bottom'>
						<div className='text'>Web Developer</div>
						<a href='#about' className='arrows' id='link'>
							<Icon icon={angleDoubleDown} />
						</a>
					</div>
				</div>
			</div>
			<div className='sectionSecond' id='about'>
				<div ref={sectionRef} className='inner'>
					<img
						className='cover-img fadeIn'
						alt='img'
						src='https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
					/>
					<h3 className='fadeIn'>About Me</h3>
					<p className='fadeIn'>
						{points.map((point, idx) => (
							<li className='point' key={uuid_v4()}>
								{point}
							</li>
						))}
					</p>
				</div>
			</div>
			<ProjectsSection />
			<div className='sectionThird'>
				<h2 className='contact ease-slow' ref={interestedSectionRef}>
					Are <span>You</span> interested?
					<button
						className='contact-btn'
						onClick={() => {
							push('/contactMe');
						}}
					>
						<span>Yes</span>
					</button>
				</h2>
			</div>
		</div>
	);
};

export default Page;
