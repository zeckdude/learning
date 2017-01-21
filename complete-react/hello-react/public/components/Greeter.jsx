var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Footer = require('Footer');

// Container component that maintains the state
var Greeter = React.createClass({
  // A way to create default values for props in case they don't get passed in
  getDefaultProps: function() {
    return {
      name: 'Jamie',
      message: 'This is from a component',
      copyright: '© Chris Seckler 2016'
    };
  },

  // Set the initial states
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewValues: function(updates) {
    // Set the state to a new value and re-render it
    this.setState(updates);
  },

  render: function() {
    // Another way to create default values for props in case they don't get passed in
    // var name = this.props.name || 'Jordan';

    // `name` should be equals to the state because that value will expectedly be changed
    var name = this.state.name;
    // `message` should be equals to the state because that value will expectedly be changed
    var message = this.state.message;
    // `copyright` should be a prop because it won't be changed
    var copyright = this.props.copyright;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewValues={this.handleNewValues} />
        <Footer copyright={copyright} />
      </div>
    );
  }
});

module.exports = Greeter;
