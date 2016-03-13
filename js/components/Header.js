var React = require('react');

var Header = React.createClass({
	render: function(){
		return <header className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand">
								<img alt="Brand" width="20" height="20" src="./img/logo.png"/>
							</a>
						</div>
						<div className="collapse navbar-collapse">
						</div>
					</div>
				</header>;
	}
});

module.exports = Header;