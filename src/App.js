import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import './App.css';

const Links = () => (
	<nav>
		<Link to="/home">Home</Link>
		<Link to="/about">About</Link>
	</nav>
);

const Header = ({match}) => (
	<div className="header">
		<Route path="/:page"
			render={({match}) => (
			<h1>{match.params.page} header</h1>)}
		/>
	</div>
);

const Content = ({match}) => (
	<div className="content">
		<Route path="/:page"
			render={({match}) => (
			<h1>{match.params.page} content</h1>)}
		/>
	</div>
);

class App extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Links />
					<Content />
					<Header />
				</div>
			</Router>
		);
	}
}

export default App;