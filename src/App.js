import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import './App.css';

const Home = () => <h1>Home</h1>;
const Menu = () => (
	<div>
		<h1>Menu</h1>
		<Link to="/menu/drink">Drinks</Link>
		<Link to="/menu/food">Foods</Link>
		<Link to="/menu/sides">sides</Link>
		<Route path="/menu/:section"
		       render={({match}) => <h2>{match.params.section}</h2>} />
	</div>
);

const App = (props) => (
	<Router>
		<div>
			<Link to="/home">Home</Link>
			<Link to="/menu">Menu</Link>
			<Route exact path="/" component={Home}/>
			<Route path="/menu" component={Menu}/>
		</div>
	</Router>
);

export default App;