/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

//Components
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import About from './components/About';

import './styles/App.scss';
// import { colors } from './styles/themes';

const App = () => {
	return (
		<div>
			<Welcome />
			<About />
			<Skills />
			<Projects />
		</div>
	);
};
export default App;
