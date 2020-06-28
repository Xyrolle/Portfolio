import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { useIntersection } from 'use-intersection';
import gsap from 'gsap';

import { Icon } from '@iconify/react';
import angleDoubleDown from '@iconify/icons-fa/angle-double-down';

import '../styles/Page.scss';

const Page = () => {
	const sectionRef = useRef(null);
	const intersecting = useIntersection(sectionRef);
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
			y       : -30,
			ease    : 'power4.out'
		});
	};


		intersecting ? fadeIn('.fadeIn') :
		fadeOut('.fadeIn');

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
						Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus
						arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae
						aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas
						diam in arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in
						iaculis. Enim eu turpis egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi
						lacus sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim sit amet venenatis
						urna cursus eget. Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et ultrices
						neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus quis. Lectus sit amet est
						placerat in egestas erat imperdiet. Cum sociis natoque penatibus et magnis dis.
					</p>
				</div>
			</div>
			<h2 className='contact'>
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
