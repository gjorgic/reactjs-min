// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var H1 = React.createClass({displayName: "H1",
	render: function(){
		return React.createElement("h1", null, this.props.children)
	}
});

var App = React.createClass({displayName: "App",
	render: function() {
		return (React.createElement("div", null, 
			React.createElement(H1, null, React.createElement("span", null, "test"))
		));
	}
});

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("app")
);