import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import './App.css';

const Home = (props) => {
	console.log(props);
	return <h1>Home</h1>;
};

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home}/>
			{/*<Route path="/about" render = {() => <h1>About</h1>}/>*/}
			<Route path="/about" children = {({match}) =>match &&  <h1>About</h1>}/>
		</div>
	</Router>

);


export default App;