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
				<ProjectsContainer>
					{projectsList.map((project) => {
						return (
							<ProjectCard
								key={project.id}
								project={project}
							/>
						);
					})}
				</ProjectsContainer>
			</Fade>
		</ProjectsSection>
	);
}

const ProjectsSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 100%;
`;
const ProjectsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
