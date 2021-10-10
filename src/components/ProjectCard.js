import React from 'react';
import styled from 'styled-components';
import { mq } from '../styles/themes';

export default function ProjectCard(props) {
	const { projectName, hrefLink, imgSrc, imgAlt } =
		props.project;

	return (
		<ProjectTile
			href={hrefLink}
			target="_blank"
			rel="noreferrer"
			{...props}
		>
			<ImageContainer>
				<img src={imgSrc} alt={imgAlt} />
			</ImageContainer>
			<ProjectTitle>{projectName}</ProjectTitle>
		</ProjectTile>
	);
}

const ProjectTile = styled.a`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	text-decoration: none;
	${mq({ width: ['150px', '250px', '300px'] })};

	margin: 1rem;

	&:hover {
		h4{
			transform: translateY(0);
		}
	}
`;

const ImageContainer = styled.div`
	position: relative;
	display: flex;
	z-index: 2;
	img {
		width: 100%;
	}
`;

const ProjectTitle = styled.h4`
	display: flex;
	flex-grow: 1;
	margin: 0;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	z-index: 1;
	
	transform: translateY(-3rem);
	${mq({ transform: ['none', 'translateY(-3rem)', 'translateY(-3rem)'] })};
	transition: ease-in-out 0.4s;
`;

// const TextOverlay = styled.div`
// 	position: absolute;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-evenly;
// 	background: rgba(0, 0, 0, 0.8);
// 	height: 100%;
// 	text-align: center;
// 	opacity: 0;
// `;
