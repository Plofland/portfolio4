import React from 'react';
import './styles/App.scss';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import About from './components/About';

const App = () => {
	return (
		<>
			<Welcome />
			<About />
			<Skills />
			<Projects />
		</>
	);
};
export default App;


