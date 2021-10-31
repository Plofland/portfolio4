import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, mq } from '../styles/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard(props) {
	const { projectName, hrefLink, imgSrc, imgAlt } =
		props.project;

	const [visible, setVisible] = useState(false);
	console.log(visible);
	return (
		<ProjectTile
			href={hrefLink}
			target="_blank"
			rel="noreferrer"
			{...props}
		>
			<ImageContainer>
				{visible && (
					<Overlay>
						<h3>{projectName}</h3>
						<p>Hello there</p>
					</Overlay>
				)}
				<Icons>
					<FontAwesomeIcon
						icon={faPlus}
						onClick={() => setVisible(!visible)}
					/>
				</Icons>
				<img src={imgSrc} alt={imgAlt} />
			</ImageContainer>
			<ProjectTitle>{projectName}</ProjectTitle>
		</ProjectTile>
	);
}

const ProjectTile = styled.div`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	${mq({ width: ['300px', '300px', '500px'] })};
	border: 1px solid white;

	&:hover {
		h4 {
			transform: translateY(0);
		}
	}

	@media (max-width: 280px) {
		width: 110px;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	display: flex;
	z-index: 2;

	img {
		border-radius: 5px;
		width: 100%;
	}
`;

const Overlay = styled.div`
	position: absolute;
	background-color: ${colors.transCyanBlue};
	width: 100%;
	height: 100%;

`;

const Icons = styled.div`
	border: 1px solid red;
	position: absolute;
	z-index: 3;
	right: 1rem;
	bottom: 1rem;
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
	${mq({
		transform: [
			'none',
			'translateY(-4rem)',
			'translateY(-4rem)'
		]
	})};
	transition: ease-in-out 0.4s;
`;
