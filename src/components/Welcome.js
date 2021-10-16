import React from 'react';
import styled from 'styled-components';
import wreckBeach from '../images/wreckBeach.jpg';
import { colors, mq } from '../styles/themes';

export default function Welcome() {
	return (
		<WelcomeSection>
			<HeaderWrapper>
				<Header>
					<h2>Hello there, I'm Peter</h2>
					<p>
						& I'm a full stack software
						developer
					</p>
				</Header>
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
	padding-top: 62vh;
`;
const Header = styled.div`
	background-color: ${colors.transCyanBlue};
	padding: 1rem;

	h2{
		${mq({ fontSize: ['2rem', '3rem', '3.5rem'] })};
	}

	p{
		margin: 1rem 0 0 0;
	}
`;
