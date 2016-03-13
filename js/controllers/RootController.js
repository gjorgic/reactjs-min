var React = require('react');

var Header = require('../components/Header');
var Footer = require('../components/Footer');

var NoneLogedinLayout = require('../layouts/NoneLoggedinLayout');
var LoggedinLayout = require('../layouts/LoggedinLayout');

var RootController = React.createClass({
	getInitialState: function(){
		return {loggedin: false};
	},
	render: function(){
		var layout = this.state.loggedin ? <LoggedinLayout/> : <NoneLogedinLayout/>;
		return <div>
					<Header/>
					{layout}
					<Footer className="col-md-12"/>
				</div>;
	}
});

module.exports = RootController;