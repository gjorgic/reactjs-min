var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;

var RootController = require('./controllers/RootController');
var BuildingsController = require('./controllers/BuildingsController');
var ResearchingController = require('./controllers/ResearchingController');

var AppRouter = React.createClass({
	render: function() {
		return <Router history={hashHistory}>
			  		<Route path="/" component={RootController}>
			  			<Route path="/buildings" component={BuildingsController}/>
			  			<Route path="/researching" component={ResearchingController}/>
				  	</Route>
			  	</Router>
	}
});

module.exports = AppRouter;