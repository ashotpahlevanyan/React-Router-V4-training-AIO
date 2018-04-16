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
			<Route exact path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)" render={({match}) => (
				<h1>
					paramA: {match.params.a} <br />
					paramB: {match.params.b}
				</h1>
			)}/>

		</div>
	</Router>
);


export default App;