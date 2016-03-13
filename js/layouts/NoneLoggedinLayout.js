var React = require('react');

var NoneLoggedinLayout = React.createClass({
	render: function(){
		return <section className="container-fluid">
					<div className="panel panel-primary form-signin">
	                    <div className="panel-heading">
	                        <h2 className="form-signin-heading">Please sign in</h2>
	                    </div>
	                    <div className="panel-body">
	                    	<div className="form-group">
		                    	<label>Username</label>
		                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
		                    </div>
		                    <div className="form-group">
		                        <label>Password</label>
		                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
		                    </div>
	                        <button className="btn btn-lg btn-primary btn-block" onClick={this.__tryLogin}>Sign in</button>
	                    </div>
					</div>
				</section>;
	},
	__tryLogin: function(){
		alert(1);
	}
});

module.exports = NoneLoggedinLayout;