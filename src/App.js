import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';

import './App.css';

const Home = (props) => {
	console.log(props);
	return <h1>Home</h1>;
};

const App = () => (
	<Router>
		<div>
			<Route exact path="/:page?/:subpage?" render={({match}) => (
				<h1>
					PAGE: {match.params.page} <br />
					SUBPAGE: {match.params.subpage}
				</h1>
			)}/>

		</div>
	</Router>
);


export default App;