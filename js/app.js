// main.js
var React = require('react');
//var ReactDOM = require('react-dom');

var AppRouter = require('./Router');

React.render(
  <AppRouter/>,
  document.getElementById("app")
);