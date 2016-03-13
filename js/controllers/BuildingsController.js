var React = require('react');

var BuildingsController = React.createClass({
	render: function(){
		return <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel primary</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>;
	}
});

module.exports = BuildingsController;