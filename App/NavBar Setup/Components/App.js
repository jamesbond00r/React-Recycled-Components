var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Navbar = require('./Navbar');
var Home = require('./Home');
var Contact = require('./Contact');
var About = require('./About');
var Gallery = require('./Gallery');

class App extends React.Component{
	render(){
		return(

		<Router>
			<div>
				<Navbar />

				<Switch>

			<Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Gallery' component={Gallery} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
			</Switch>
			</div>
			</Router>
		)
	}
}

module.exports = App;