/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import './styles/App.scss';
import Projects from './components/Projects';

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
		navigationTooltips={anchors}
		sectionsColor={[
			'#282c34',
			'#ff5f45',
			'#0798ec',
			'#ff5f45'
		]}
		onLeave={(origin, destination, direction) => {
			console.log('onLeave event', {
				origin,
				destination,
				direction
			});
		}}
		render={({ state, fullpageApi }) => {
			console.log(
				'render prop change',
				state,
				fullpageApi
			); // eslint-disable-line no-console

			return (
				<div>
					<MySection content={'Hello There'} />
					<MySection content={'About Me'} />
					<MySection content={'Skills'} />
					<MySection content={<Projects/>} />
				</div>
			);
		}}
	/>
);

export default App;
