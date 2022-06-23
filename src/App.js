import React from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import About from './components/About';

import './styles/App.scss';
import styled from 'styled-components';
import Deck from './components/Deck';

const App = () => {
	return (
		<AppDiv>
			<Welcome />
			<About />
			<Skills />
			<Projects />
			<Deck />
		</AppDiv>
	);
};
export default App;

const AppDiv = styled.div`
	position: relative;
`;
