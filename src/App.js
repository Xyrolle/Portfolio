import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import ContactMe from './components/ContactMe';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/contactMe' component={ContactMe} />
					<Route exact path='/' component={Page} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
