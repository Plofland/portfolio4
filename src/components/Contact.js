import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { colors, mq } from '../styles/themes';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
	return (
		<ContactSection>
			<SocialIcons>
				<Fade bottom cascade delay={400}>
					<div style={{ display: 'flex' }}>
						<Icon>
							<a
								href={
									'https://mail.google.com/mail/?view=cm&fs=1&to=ploflan@gmail.com&su=SUBJECT&body=BODY'
								}
								target="_blank"
								rel="noreferrer"
								aria-label="Gmail"
							>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal>
									<StyledIcon
										icon={faEnvelope}
									/>
								</IconPedal>
							</a>
						</Icon>
						<Icon>
							<a
								href={
									'https://www.linkedin.com/in/peter-lofland/'
								}
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn"
							>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal>
									<StyledIcon
										icon={faLinkedin}
									/>
								</IconPedal>
							</a>
						</Icon>
						<Icon>
							<a
								href={
									'https://twitter.com/PeterLofland'
								}
								target="_blank"
								rel="noreferrer"
								aria-label="Twitter"
							>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal>
									<StyledIcon
										icon={faTwitter}
									/>
								</IconPedal>
							</a>
						</Icon>
						<Icon>
							<a
								href={
									'https://github.com/Plofland'
								}
								target="_blank"
								rel="noreferrer"
								aria-label="Github"
							>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal>
									<StyledIcon
										icon={faGithub}
									/>
								</IconPedal>
							</a>
						</Icon>
						<Icon>
							<a
								href={
									'https://www.instagram.com/peterlofland/'
								}
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram"
							>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal></IconPedal>
								<IconPedal>
									<StyledIcon
										icon={faInstagram}
									/>
								</IconPedal>
							</a>
						</Icon>
					</div>
				</Fade>
			</SocialIcons>
		</ContactSection>
	);
}

export default Contact;

const ContactSection = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	// border: 1px solid yellow;
	height: 20%;
`;

const SocialIcons = styled.ul`
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	li:nth-child(1) span {
		background: #de5246;
	}
	li:nth-child(2) span {
		background: #0072b1;
	}
	li:nth-child(3) span {
		background: #00acee;
	}
	li:nth-child(4) span {
		background: #171515;
	}
	li:nth-child(5) span {
		background: #3f729b;
	}
`;

const Icon = styled.li`
	position: relative;
	list-style: none;
	${mq({
		margin: ['.25rem .5rem', '1rem', '2rem 2rem']
	})};
	${mq({ width: ['1.5rem', '3rem', '4rem'] })};
	aspect-ratio: 1;

	&:hover span:nth-child(6) {
		transform: scale(1.2);
		opacity: 1;
	}

	//* Flower pedal hover animation
	@media (min-width: 1026px) {
		&:hover span:nth-child(5) {
			transition-delay: 0.2s;
			transform: scale(1.2) rotate(45deg);
			background-color: ${colors.ivory};
			border-radius: 1px;
			opacity: 1;
		}
		&:hover span:nth-child(4) {
			transform: translate(20px, -20px);
			transition-delay: 0.05s;
			border-radius: 40px;
			opacity: 0.6;
		}
		&:hover span:nth-child(3) {
			transform: translate(-20px, 20px);
			border-radius: 40px;
			transition-delay: 0.05s;
			opacity: 0.6;
		}
		&:hover span:nth-child(2) {
			transform: translate(-20px, -20px);
			border-radius: 40px;
			transition-delay: 0.05s;
			opacity: 0.6;
		}
		&:hover span:nth-child(1) {
			transform: translate(20px, 20px);
			border-radius: 40px;
			transition-delay: 0.05s;
			opacity: 0.6;
		}
	}
`;

const IconPedal = styled.span`
	${mq({ borderRadius: ['5px', '10px', '10px'] })};
	position: absolute;
	box-shadow: 1px 1px 2px ${colors.transDarkText};
	width: 100%;
	aspect-ratio: 1;
	transition: 0.25s;
	display: flex !important;
	align-items: center;
	justify-content: center;
	color: ${colors.ivory};
`;

const StyledIcon = styled(FontAwesomeIcon)`
	${mq({ fontSize: ['1rem', '2rem', '3rem'] })};
`;
