import React from 'react';
import projectsList from '../projectsList';
import Fade from 'react-reveal/Fade';
import ProjectCard from './ProjectCard';
import { colors, mq } from '../styles/themes';
import styled from 'styled-components';
import {
	Swiper,
	SwiperSlide
} from 'swiper/react/swiper-react';

export default function Projects() {
	return (
		<ProjectsSection>
			<ProjectSectionTitle>Works</ProjectSectionTitle>
			<CarouselContainer>
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() =>
						console.log('slide change')
					}
					onSwiper={(swiper) =>
						console.log(swiper)
					}
				>
					{projectsList.map((project) => (
						<SwiperSlide>
							<Fade
								bottom
								delay={project.id * 60}
							>
								<ProjectCard
									key={project.id}
									project={project}
								/>
							</Fade>
						</SwiperSlide>
					))}
				</Swiper>
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
	border: 1px solid white;
	display: flex;
	${mq({ width: ['100%', '80%', '70%'] })};
	${mq({ height: ['25%', '40%', '80%'] })};
`;
