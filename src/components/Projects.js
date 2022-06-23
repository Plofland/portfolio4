import React from 'react';
import projectsList from '../projectsList';
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
			<StyledSwiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
			>
				{projectsList.map((project) => (
					<SwiperSlide>
						
							<ProjectCard
								key={project.id}
								project={project}
							/>
						
					</SwiperSlide>
				))}
			</StyledSwiper>
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
	display: flex;
	align-items: center;
	padding: 1rem;
`;

const StyledSwiper = styled(Swiper)`
	${mq({ width: ['275px', '400px', '500px'] })};
	${mq({ height: ['275px', '400px', '500px'] })};
`;
