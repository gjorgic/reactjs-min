var React = require('react');

var LoggedinLayout = React.createClass({
	render: function(){
		return <section className="container-fluid">
					<div className="row">
						<div className="col-sm-3 col-md-2 sidebar">
							<ul className="nav nav-pills nav-stacked nav-sidebar">
								<li className="active"><a href="#">test 1</a></li>
								<li><a href="#">test 2</a></li>
							</ul>
						</div>
						<div className="col-sm-offset-3 col-sm-9 col-md-offset-2 col-md-10 content">{this.props.children}</div>
					</div>
				</section>;
	}
});

module.exports = LoggedinLayout;