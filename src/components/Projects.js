import React, { useState } from 'react';
import projectsList from '../projectsList';
import Fade from 'react-reveal/Fade';
import ProjectCard from './ProjectCard';
import { colors, mq } from '../styles/themes';
import styled from 'styled-components';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

export default function Projects() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = projectsList.map((project, index) => {
		return {
			key: project.id,
			content: (
				<Fade bottom delay={project.id*60}>
					<ProjectCard
						key={project.id}
						project={project}
						onClick={() =>
							setCurrentSlide(project.id)
						}
					/>
				</Fade>
			)
		};
	});

	const slideState = {
		goToSlide: currentSlide,
		offsetRadius: 2,
		showNavigation: false,
		config: config.stiff,
		length: projectsList.length
	};

	return (
		<ProjectsSection>
			<ProjectSectionTitle>Works</ProjectSectionTitle>
			<CarouselContainer>
					<Carousel
						slides={slides}
						goToSlide={slideState.goToSlide}
						offsetRadius={
							slideState.offsetRadius
						}
						showNavigation={
							slideState.showNavigation
						}
						length={slideState.length}
						animationConfig={slideState.config}
					/>
			</CarouselContainer>
		</ProjectsSection>
	);
}

const ProjectsSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 100vh;
	background-color: ${colors.mineralGreen};
`;

const ProjectSectionTitle = styled.h2`
	// border: 2px solid black;
	display: flex;
	align-items: center;
	padding: 1rem;
`;

const CarouselContainer = styled.div`
	// border: 1px solid white;
	display: grid;
	${mq({ width: ['100%', '80%', '70%'] })};
	${mq({ height: ['25%', '40%', '80%'] })};
`;
