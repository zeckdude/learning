var React = require('react');

// Presentational Component
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        {/* Another way to create default values for props in case they don't get passed in */}
        {/* <h1>Hello {name || 'John'}!</h1> */}
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
