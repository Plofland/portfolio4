import React from 'react';
import styled from 'styled-components';
import wreckBeach from '../images/wreckBeach.jpeg';
import { colors } from '../styles/themes';

export default function Welcome() {
	return (
		<WelcomeSection className="welcome">
			<HeaderWrapper id="headerHolder">
				<Header>Hello There</Header>
			</HeaderWrapper>
		</WelcomeSection>
	);
}

const WelcomeSection = styled.div`
	text-align: center;
	height: 100%;
	background-size: cover;
	background-image: url(${wreckBeach});
	background-position: top center;
	background-attachment: fixed;
	display: flex;
	justify-content: center;
`;
const HeaderWrapper = styled.div`
	padding-top: 65vh;
`;
const Header = styled.h2`
	background-color: ${colors.transMidnightBlue};
	padding: 1rem;
`;
