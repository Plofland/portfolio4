import React from 'react';
import '../styles/Contact.scss';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});
	return (
		<div className="socialIcons">
			<Fade bottom cascade delay={400}>
				<ul>
					<li>
						<a
							href={
								'https://mail.google.com/mail/?view=cm&fs=1&to=ploflan@gmail.com&su=SUBJECT&body=BODY'
							}
							target="_blank"
							rel="noreferrer"
							aria-label="Gmail"
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="fa fa-envelope"
                                    size={isMobile ? 'xs' : null}
								/>
							</span>
						</a>
					</li>
					<li>
						<a
							href={
								'https://www.linkedin.com/in/peter-lofland/'
							}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="fa fa-linkedin"
                                    size={isMobile ? 'xs' : null}
								/>
							</span>
						</a>
					</li>
					<li>
						<a
							href={
								'https://twitter.com/PeterLofland'
							}
							target="_blank"
							rel="noreferrer"
							aria-label="Twitter"
                            
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span>
								<FontAwesomeIcon
									icon={faTwitter}
									className="fa fa-twitter"
                                    size={isMobile ? 'xs' : null}
								/>
							</span>
						</a>
					</li>
					<li>
						<a
							href={
								'https://github.com/Plofland'
							}
							target="_blank"
							rel="noreferrer"
							aria-label="Github"
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span>
								<FontAwesomeIcon
									icon={faGithub}
									className="fa fa-github"
                                    size={isMobile ? 'xs' : null}
								/>
							</span>
						</a>
					</li>
					<li>
						<a
							href={
								'https://www.instagram.com/peterlofland/'
							}
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span>
								<FontAwesomeIcon
									icon={faInstagram}
									className="fa fa-instagram"
                                    size={isMobile ? 'xs' : null}
								/>
							</span>
						</a>
					</li>
				</ul>
			</Fade>
		</div>
	);
}

export default Contact;
