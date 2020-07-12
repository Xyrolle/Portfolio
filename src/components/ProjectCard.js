import React, { useState } from 'react';

import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-bytesize/github';
import eyeIcon from '@iconify/icons-mdi/eye';

import '../styles/ProjectCard.scss';

const ProjectCard = ({ title, img, gif, git, live, proportions }) => {
	const [ bgImage, setBgImage ] = useState(img);

	const handleMouseOver = () => {
		setBgImage(gif);
	};

	const handleMouseLeave = () => {
		setBgImage(img);
	};

	return (
		<div className='project-card'>
			<h3 className='title'>{title}</h3>
			<div
				className={'project-img ' + proportions}
				style={{ backgroundImage: `url('${bgImage}')` }}
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
			/>

			<a href={`https://github.com/Xyrolle/${git}`}>
				<button className='source'>
					Source Code <Icon className='github-icon' icon={githubIcon} />
				</button>
			</a>
			{live && (
				<a href={`https://xyrolle.github.io/${live}`}>
					<button className='live-version'>
						Live Version <Icon className='eye-icon' icon={eyeIcon} />
					</button>
				</a>
			)}
		</div>
	);
};

export default ProjectCard;
