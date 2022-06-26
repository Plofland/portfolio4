import React from 'react';
import styled from 'styled-components';
import wreckBeach from '../images/wreckBeach.jpg';
import { colors, mq } from '../styles/themes';

export default function Welcome() {
	return (
		<WelcomeSection>
			<HeaderWrapper>
				<Header>
					<h2>Hello, I'm Peter</h2>
					<p>FULL STACK SOFTWARE DEVELOPER</p>
				</Header>
			</HeaderWrapper>
		</WelcomeSection>
	);
}

const WelcomeSection = styled.div`
	text-align: center;
	height: 100vh;
	background-image: url(${wreckBeach});
	background-position: top center;
	${mq({ backgroundAttachment: ['scroll', 'fixed', 'fixed'] })};
	background-size: cover;
	display: flex;
	justify-content: center;
`;

const HeaderWrapper = styled.div`
	padding-top: 62vh;
`;

const Header = styled.div`
	background-color: ${colors.transCyanBlue};
	padding: 1rem;

	h2 {
		${mq({ fontSize: ['2rem', '3rem', '3.5rem'] })};
		padding: 2rem 1rem 0 1rem;
	}

	p {
		padding: 1rem;
	}
`;
