import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useIntersection } from 'use-intersection';
import { v4 as uuid_v4 } from 'uuid';
import gsap from 'gsap';

import { Icon } from '@iconify/react';
import angleDoubleDown from '@iconify/icons-fa/angle-double-down';

import '../styles/Page.scss';

const Page = () => {
	const sectionRef = useRef(null);
	const interestedSectionRef = useRef(null);

	const intersecting = useIntersection(sectionRef);
	const interestedIntersecting = useIntersection(interestedSectionRef);

	const { push } = useHistory();

	const fadeIn = (element) => {
		gsap.to(element, 1, {
			opacity : 1,
			y       : 80,
			ease    : 'power4.out',
			stagger : {
				amount : 0.3
			}
		});
	};

	const fadeOut = (element) => {
		gsap.to(element, 1, {
			opacity : 0,
			y       : -80,
			ease    : 'power4.out'
		});
	};

	const bounceIn = (element) => {
		gsap.to(element, 2, {
			opacity : 1,
			y       : 100,
			ease    : 'bounce.out'
		});
	};

	const bounceOut = (element) => {
		gsap.to(element, 2, {
			opacity : 0,
			y       : -100,
			ease    : 'bounce.out'
		});
	};


		intersecting ? fadeIn('.fadeIn') :
		fadeOut('.fadeIn');


		interestedIntersecting ? bounceIn('.bounce') :
		bounceOut('.bounce');

	const points = [
		'I am a web developer, whose primary focus is front-end',
		'I am passionate about react and programming in general',
		'I have strong understanding of OOP concepts and design patterns',
		'I have good algorithm and data structure skills',
		'Worked with technologies, such as React, CSS, SASS, JQuery, NodeJS, Express, SQL and a lot more',
		'Current Position: Intern at EBS Integrator'
	];

	let liElements = [];

	useEffect(() => {});

	document.querySelectorAll('.point').forEach((dot, i) => {
		gsap.to(dot, {
			duration : 1,
			ease     : points[i],
			delay    : i * 0.06
		});
	});

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
					{/* <h4>I have...</h4> */}
					<p className='fadeIn'>
						{points.map((point, idx) => (
							<li className='point' id={uuid_v4()}>
								{point}
							</li>
						))}
					</p>
				</div>
			</div>
			<h2 className='contact bounce' ref={interestedSectionRef}>
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
	);
};

export default Page;
