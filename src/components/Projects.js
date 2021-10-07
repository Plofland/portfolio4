import React from 'react';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';
import '../styles/Projects.scss';
import Fade from 'react-reveal/Fade';

export default function Projects() {
	return (
		<div className="projectsSection">
			<h2>Projects</h2>
			<Fade bottom cascade>
				<div className="projectsContainer">
					{projectsList.map((project) => {
						return (
							<ProjectCard
								key={project.id}
								project={project}
							/>
						);
					})}
				</div>
			</Fade>
		</div>
	);
}
