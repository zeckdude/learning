var React = require('react');
var ReactDOM = require('react-dom');

// ES6 implementation
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// ES5 alternative implementation
// var Route = require('react-router').Route,
//     Router = require('react-router').Router,
//     IndexRoute = require('react-router').IndexRoute,
//     hashHistory = require('react-router').hashHistory;

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
