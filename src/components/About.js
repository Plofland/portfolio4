import React from 'react';
import selfBust from '../images/selfBustShot.jpg';
import '../styles/About.scss';
import Fade from 'react-reveal/Fade';

export default function About() {
	return (
		<div className="about">
			<div className="descriptionAndImage">
					<Fade bottom cascade>
						<div className="selfDescription">
							<p>
								I enjoy overcoming obstacles
								and seeing a project from
								conception to deployment.
								I'm capable of working on
								both the front and back end
								but I have an affinity for
								UI/UX design.
							</p>
							<p>
								I always love learning
								anything about software
								engineering whether it's a
								tool, framework, workflow
								enhancement or a new
								language. I particularly
								relish working in a group
								but am adept at working
								independently to find my own
								solutions.
							</p>
							<p>
								<u>Life outside of code:</u>
								<p>
									{' '}
									On my free time I love
									cooking, camping,
									hiking, backpacking,
									photography or spending
									the entire day at the
									beach.
								</p>
							</p>
						</div>
					</Fade>
				<img
					src={selfBust}
					alt="Peter Lofland bust shot"
				/>
			</div>
		</div>
	);
}
