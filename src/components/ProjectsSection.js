import React, { useRef } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import { useIntersection } from 'use-intersection';
import { easeSlowIn, easeSlowOut } from '../utils/Animations';

import ProjectCard from './ProjectCard';

import '../styles/ProjectsSection.scss';

import twentyFourtyEightImg from '../assets/images/2048.jpg';
import twentyFourtyEightGif from '../assets/gifs/2048.gif';

import weatherImg from '../assets/images/weather.jpg';
import weatherGif from '../assets/gifs/weather.gif';

import calculatorImg from '../assets/images/calculator.jpg';
import calculatorGif from '../assets/gifs/calculator.gif';

import todosImg from '../assets/images/todos.jpg';
import todosGif from '../assets/gifs/todos.gif';

const projectCards = [
	{
		title       : '2048',
		img         : twentyFourtyEightImg,
		gif         : twentyFourtyEightGif,
		proportions : 'img-square',
		git         : '2048'
	},
	{ title: 'Weather App', img: weatherImg, gif: weatherGif, proportions: 'img-horizontal', git: 'Weather-App' },
	{ title: 'Calculator', img: calculatorImg, gif: calculatorGif, proportions: 'img-vertical', git: 'Calculator' },
	{ title: 'Todo App', img: todosImg, gif: todosGif, proportions: 'img-horizontal', git: 'Todo-App' }
];

export const ProjectsSection = () => {
	const projectsRef = useRef(null);
	const intersecting = useIntersection(projectsRef);


		intersecting ? easeSlowIn('.ease-slow-proj') :
		easeSlowOut('.ease-slow-proj');

	return (
		<div>
			<h2>Here is some of my work</h2>
			<div className='projects-container ease-slow-proj' ref={projectsRef}>
				{projectCards.map((project) => (
					<ProjectCard
						title={project.title}
						img={project.img}
						gif={project.gif}
						git={project.git}
						live={project.live}
						proportions={project.proportions}
						key={uuid_v4()}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsSection;
