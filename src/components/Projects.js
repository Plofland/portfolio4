import React from 'react';
import projectsList from '../projectsList'
import ProjectCard from './ProjectCard';
import '../styles/Projects.scss'

export default function Projects() {
	return (
		<div className='projectsSection'>
			<h2>Projects</h2>
			<div className='projectsContainer'>
				{projectsList.map((project) => {
					return (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					);
				})}
			</div>
		</div>
	);
}
