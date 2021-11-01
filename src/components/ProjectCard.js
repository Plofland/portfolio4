import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, mq } from '../styles/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlusCircle,
	faMinusCircle,
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
						<ProjectDetails>
							<p>{techStack}</p>
							<p>{description}</p>
						</ProjectDetails>
						<OverlayIcons>
							<a
								href={gitHubLink}
								target="_blank"
								rel="noreferrer"
								aria-label="gitHub link"
							>
								<FontAwesomeIcon
									icon={faGithub}
								/>
							</a>
							<a
								href={hrefLink}
								target="_blank"
								rel="noreferrer"
								aria-label="project link"
							>
								<FontAwesomeIcon
									icon={faLink}
								/>
							</a>
						</OverlayIcons>
					</Overlay>
				)}
				<MoreInfoIcon
					icon={visible ? faMinusCircle : faPlusCircle}
					onClick={() => setVisible(!visible)}
				/>
				<img src={imgSrc} alt={imgAlt} />
			</ImageContainer>
		
		</ProjectTile>
	);
}

const ProjectTile = styled.div`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	${mq({ width: ['300px', '300px', '500px'] })};
	border: 1px solid white;

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

	h3 {
		padding: 3rem;
		background: linear-gradient(
			to left,
			transparent,
			${colors.ivory},
			transparent 100%
		);
		background-position: 0 100%;
		background-size: 100% 2px;
		background-repeat: repeat-x;
	}

	p {
		padding: 1.5rem;
	}
`;

const ProjectDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

const OverlayIcons = styled.div`
	// border: 1px solid blue;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	font-size: 2rem;
	padding: 1rem;
	a {
		color: inherit;
	}
`;

const MoreInfoIcon = styled(FontAwesomeIcon)`
	border: 2px solid ${colors.transDarkText};
	border-radius: 50px;
	position: absolute;
	z-index: 3;
	right: 1rem;
	bottom: 1rem;
	font-size: 2rem;
	color: ${colors.cyanBlue};
	// background-color: ${colors.transBlack};
	cursor: pointer;
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
