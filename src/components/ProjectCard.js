import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import '../styles/ProjectCard.scss';


export default function ProjectCard(props) {
	const { projectName, hrefLink, imgSrc, imgAlt } =
		props.project;
	// const isMobile = useMediaQuery({
	// 	query: '(max-width: 750px)'
	// });

	return (
		<a
			className="projectTile"
			href={hrefLink}
			target="_blank"
			rel="noreferrer"
			{...props}
		>
			<div className="imageContainer">
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<h4 className="projectTitle">{projectName}</h4>
		</a>
	);
}

{
	/* {isMobile && (
    <div className="textOverlay">
        <p>{description}</p>
    </div>
)} */
}
