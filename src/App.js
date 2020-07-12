import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import ContactMe from './components/ContactMe';
import MyProjectsSection from './components/ProjectsSection';

import './App.css';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/projects' component={MyProjectsSection} />
					<Route path='/contactMe' component={ContactMe} />
					<Route path='/' component={Page} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
