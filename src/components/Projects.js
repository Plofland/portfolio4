import React from 'react';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

export default function Projects() {
	return (
		<ProjectsSection>
			<h2>Projects</h2>
			<Fade bottom cascade>
				{/* div with inline styling to fix Fade effect */}
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center'
					}}
				>
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
		</ProjectsSection>
	);
}

const ProjectsSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 100vh;
	// border: 2px solid black;

	h2{
		margin: 1rem 0;
	}
`;

