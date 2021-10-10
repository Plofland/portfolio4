import React from 'react';
import selfBust from '../images/selfBustShot.jpg';
import Fade from 'react-reveal/Fade';
import Contact from './Contact';
import styled from 'styled-components';
import { colors } from '../styles/themes';

export default function About() {
	return (
		<AboutSection>
			<DescriptionContactImage>
				<DescriptionContact>
					<SelfDescription>
						<Fade bottom cascade>
							<div>
								<p>
									I enjoy overcoming
									obstacles and seeing a
									project from conception
									to deployment. I'm
									capable of working on
									both the front and back
									end but I have an
									affinity for UI/UX
									design.
								</p>
								<p>
									I always love learning
									anything about software
									engineering whether it's
									a tool, framework,
									workflow enhancement or
									a new language. I
									particularly relish
									working in a group but
									am adept at working
									independently to find my
									own solutions.
								</p>
							</div>
						</Fade>
					</SelfDescription>
					<Contact />
				</DescriptionContact>
				<Image className="image">
					<img
						src={selfBust}
						alt="Peter Lofland bust shot"
					/>
				</Image>
			</DescriptionContactImage>
		</AboutSection>
	);
}

const AboutSection = styled.div`
	text-align: center;
	// border: 1px solid green;
	height: 100vh;
	font-size: larger;
`;

const DescriptionContactImage = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const DescriptionContact = styled.div`
	margin: 2rem;
	flex-grow: 2;
	// border: 1px solid green;
`;

const SelfDescription = styled.div`
	padding: 0 8rem;
	flex-direction: column;
	// border: 1px solid black;
`;

const Image = styled.div`
	height: 600px;
	flex-grow: 1;
	// border: 3px solid white;
	margin: 3rem 3rem 3rem 0;

	img {
		height: 100%;
		border-radius: 50px 20px;
		padding: 1rem;
		background-image: linear-gradient(
			45deg,
			${colors.midnightBlue},
			${colors.turquoise}
		);
		background-origin: border-box;
		box-shadow: rgba(0, 0, 0, 0.45) 1px 1px 2px;
	}
`;
