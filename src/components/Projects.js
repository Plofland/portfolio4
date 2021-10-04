import React from 'react';
import styled from 'styled-components';
import projectsList from '../projectsList'
import ProjectCard from './ProjectCard';

export default function Projects() {

	return (
		<ProjectsSection className='projectSection' id="projects">
			<SectionTitle>Projects</SectionTitle>
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
		</ProjectsSection>
	);
}

const ProjectsSection = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
	padding: 2rem;
	background-color: blue;
`;

const SectionTitle = styled.div`
	font-size: 3rem;
`;

const ProjectsContainer = styled.div`
	display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
