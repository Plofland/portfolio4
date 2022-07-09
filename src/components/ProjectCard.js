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
					icon={
						visible
							? faMinusCircle
							: faPlusCircle
					}
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
`;

const ImageContainer = styled.div`
	position: relative;
	display: flex;

	img {
		border-radius: 10px;
		width: 100%;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11),
			0 2px 2px rgba(0, 0, 0, 0.11),
			0 4px 4px rgba(0, 0, 0, 0.11),
			0 6px 8px rgba(0, 0, 0, 0.11),
			0 8px 16px rgba(0, 0, 0, 0.11);
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
		${mq({ padding: ['1rem', '2rem', '3rem'] })};
		${mq({ fontSize: ['1rem', '2rem', '3rem'] })};

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
		${mq({ padding: ['.5rem', '1rem', '1.5rem'] })};
		${mq({ fontSize: ['.65rem', '1rem', '1rem'] })};
	}
`;

const ProjectDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

const OverlayIcons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	font-size: 2rem;
	${mq({ fontSize: ['1.75rem', '2rem', '2rem'] })};
	${mq({ padding: ['.4rem', '1rem', '1.5rem'] })};

	a {
		color: inherit;
	}
`;

const MoreInfoIcon = styled(FontAwesomeIcon)`
	border-radius: 50px;
	position: absolute;
	z-index: 3;
	right: 1rem;
	bottom: 1rem;
	${mq({ fontSize: ['1.5rem', '2rem', '2.5rem'] })};
	color: ${colors.ivory};
	background-color: ${colors.darkText};
	cursor: pointer;
`;
