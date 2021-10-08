import React from 'react';
import '../styles/Contact.scss';
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
		<div className="socialIcons">
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
							/>
						</span>
					</a>
				</li>
				<li>
					<a
						href={'https://github.com/Plofland'}
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
							/>
						</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
