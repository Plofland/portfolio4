import React from 'react';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';
import { mq } from '../styles/themes';
import styled from 'styled-components';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

export default function Projects() {
	// const slides = [{key:1, content:<img src={LAN} alt="1" />}]
	const slides = projectsList.map((project, index) => {
		return {
			key: project.id,
			content: (
				<img
					src={project.imgSrc}
					alt={project.imgAlt}
				/>
			)
		};
	});

	let slideState = {
		goToSlide: 0,
		offsetRadius: 2,
		showNavigation: true,
		config: config.gentle
	};

	return (
		<ProjectsSection>
			<ProjectSectionTitle>Works</ProjectSectionTitle>
			{/* <Fade bottom cascade>
				div with inline styling to fix Fade effect 
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						alignContent: 'center',
						height: '80%'
					}}
				>
					<Carousel slides={slides}/>	
				</div>
			</Fade> */}
			<CarouselContainer>
				<Carousel
					slides={slides}
					goToSlide={slideState.goToSlide}
					offsetRadius={slideState.offsetRadius}
					showNavigation={
						slideState.showNavigation
					}
					animationConfig={slideState.config}
				/>
			</CarouselContainer>
		</ProjectsSection>
	);
}

const ProjectsSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 100vh;
	border: 2px solid black;
`;

const ProjectSectionTitle = styled.h2`
	height: 15vh;
	display: flex;
	align-items: center;
`;

const CarouselContainer = styled.div`
	border: 1px solid white;
	${mq({ width: ['100%', '70%', '50%'] })};
	height: 100%;
`;

// const Test = styled.div`
// 	display: flex;
// 	overflow-x: auto;
// 	border: 2px solid black;
// `;
