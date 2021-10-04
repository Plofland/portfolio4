import React from 'react';
// import { useMediaQuery } from 'react-responsive';

export default function ProjectCard(props) {
	const { projectName, hrefLink, imgSrc, imgAlt } = props.project;
	// const isMobile = useMediaQuery({
	// 	query: '(max-width: 750px)'
	// });

	return (
		<a
			className="projectTile"
			href={hrefLink}
			target="_blank"
			rel="noreferrer"
		>
			<div className="imageContainer">
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<h3 className="projectTitle">{projectName}</h3>
		</a>
	);
}



{/* {isMobile && (
    <div className="textOverlay">
        <p>{description}</p>
    </div>
)} */}