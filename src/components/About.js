import React from 'react';
import selfBust from '../images/selfBustShot.jpg';
import Fade from 'react-reveal/Fade';
import Contact from './Contact';
import styled from 'styled-components';
import { colors, mq } from '../styles/themes';

export default function About() {
	return (
		<AboutSection>
			<DescriptionContact>
				<SelfDescription>
					<Fade bottom cascade>
						<div>
							<p>
								I'm a Junior Developer with experience and interest in the tech startup scene in New York City. I love working with newer technologies and building towards the future.
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
						</div>
					</Fade>
				</SelfDescription>
				<Contact />
			</DescriptionContact>
			<Image>
				<img
					src={selfBust}
					alt="Peter Lofland bust shot"
				/>
			</Image>
		</AboutSection>
	);
}

const AboutSection = styled.div`
	text-align: center;
	// border: 1px solid green;
	height: 100vh;
	display: flex;
	${mq({ flexDirection: ['column', 'column', 'row'] })};
	justify-content: space-evenly;
	align-items: center;
	${mq({ fontSize: ['.75rem', '1rem', '1rem'] })};
	background-color: ${colors.oxfordBlue};
`;

const DescriptionContact = styled.div`
	${mq({ margin: ['1rem 0 0 0', '0 2rem', '2rem'] })};
	${mq({ flexGrow: ['1', '1', '2'] })};
	// border: 1px solid green;
`;

const SelfDescription = styled.div`
	${mq({ padding: ['0', '2rem 0', '0 8rem'] })};
	flex-direction: column;
	// border: 1px solid black;
	p {
		padding: 1rem;
	}
`;

const Image = styled.div`
	${mq({ height: ['50%', '50%', '80%'] })};
	${mq({ flexGrow: ['2', '1', '1'] })};
	// border: 1px solid white;
	${mq({
		margin: [
			'0 0 1rem 0',
			'0 0 2rem 0',
			'3rem 6rem 3rem 0'
		]
	})};

	img {
		height: 100%;
		border-radius: 50px 20px;
		${mq({ padding: ['0.25rem', '0.5rem', '1rem'] })};
		background-image: linear-gradient(
			45deg,
			${colors.midnightBlue},
			${colors.turquoise}
		);
		background-origin: border-box;
		box-shadow: 1px 1px 2px ${colors.transDarkText};
	}
`;
