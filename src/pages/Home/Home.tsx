import React from 'react';
import { Link } from 'react-router-dom';
import { SampleComponent } from '../../components';

const Home = (): JSX.Element => (
	<div>
		<h1>Welcome to Home, Below is A Sample Component.</h1>
		<Link to="/redux-sample">Redux Sample</Link>
		<Link to="/redux-sample-api">Redux Sample</Link>
		<SampleComponent />
	</div>
);

export default Home;
