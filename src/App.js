/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

//Components
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import About from './components/About';

import './styles/App.scss';
import { colors } from './styles/themes';

class MySection extends React.Component {
	render() {
		return (
			<div className="section">
				{this.props.content}
			</div>
		);
	}
}

const anchors = ['Welcome', 'About', 'Skills', 'Projects'];

const App = () => (
	<ReactFullpage
		anchors={anchors}
		navigation
		sectionsColor={[
			`${colors.cyanBlue}`,
			`${colors.oxfordBlue}`,
			`${colors.cyanBlue}`,
			`${colors.mineralGreen}`
		]}
		render={({ state, fullpageApi }) => {
			console.clear()
			return (
				<div>
					<MySection content={<Welcome />} />
					<MySection content={<About />} />
					<MySection content={<Skills />} />
					<MySection content={<Projects />} />
				</div>
			);
		}}
	/>
);

export default App;
