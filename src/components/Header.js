import React from 'react';

import '../styles/Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='animated-title'>
				<div className='text-top'>
					<div>
						<span>Hmeli</span>
						<span> Serghei</span>
					</div>
				</div>
				<div className='text-bottom'>
					<div>Web Developer</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
