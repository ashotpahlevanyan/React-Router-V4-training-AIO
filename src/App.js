import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
} from 'react-router-dom';

import './App.css';

const Home = (props) => {
	console.log(props);
	return <h1>Home</h1>;
};

const Links = () => (
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
	</nav>
);

class App extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Links />
					<Switch>
						<Route exact path="/" render={() => <h1>Home</h1>} />
						<Route path="/about" render={() => <h1>About</h1>} />
						<Route path="/contact" render={() => <h1>Contact</h1>} />
						<Route
							path="/:itemId"
							render={({match}) => (<h1>Item: {match.params.itemId}</h1>)} />
					</Switch>
				</div>
			</Router>
		);
	}
}


export default App;