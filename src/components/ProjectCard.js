import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, mq } from '../styles/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faMinus,
	faLink
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard(props) {
	const {
		projectName,
		description,
		techStack,
		hrefLink,
		gitHubLink,
		imgSrc,
		imgAlt
	} = props.project;

	const [visible, setVisible] = useState(false);

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
						<p>{techStack}</p>
						<p>{description}</p>
						<OverlayIcons>
							<a
								href={gitHubLink}
								target="_blank"
								rel="noreferrer"
								aria-label="Gmail"
							>
								<FontAwesomeIcon
									icon={faGithub}
								/>
							</a>
							<a
								href={hrefLink}
								target="_blank"
								rel="noreferrer"
								aria-label="Gmail"
							>
								<FontAwesomeIcon
									icon={faLink}
								/>
							</a>
						</OverlayIcons>
					</Overlay>
				)}
				<MoreInfoIcon
					icon={visible ? faMinus : faPlus}
					onClick={() => setVisible(!visible)}
				/>
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
	background-color: ${colors.transBlack};
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: 0.35s ease-in-out;

	h3 {
		border: 1px solid blue;
	}

	p {
		border: 1px solid blue;
	}
`;

const OverlayIcons = styled.div`
	border: 1px solid blue;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	font-size: 2rem;
	padding: 1rem;
`;

const MoreInfoIcon = styled(FontAwesomeIcon)`
	border: 1px solid red;
	position: absolute;
	z-index: 3;
	right: 1rem;
	bottom: 1rem;
	font-size: 2rem;
	background-color: ${colors.transBlack};
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
