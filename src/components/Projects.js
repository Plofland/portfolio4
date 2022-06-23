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
import { EffectCards } from 'swiper';

export default function Projects() {
	return (
		<ProjectsSection>
			<ProjectSectionTitle>Works</ProjectSectionTitle>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				style={{ width: '500px', height: '500px' }}
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

// const StyledSwiper = styled(Swiper)`
// 	${mq({ width: ['275px', '400px', '500px'] })};
// 	${mq({ height: ['275px', '400px', '500px'] })};
// `;
