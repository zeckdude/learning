var React = require('react');

// Presentational Component
var GreeterForm = React.createClass({
  // Get the value of the input field, update the `name` state, and clear out the input field
  onFormSubmit: function(event) {
    event.preventDefault();

    var updates = {};

    var nameRef = this.refs.name;
    var messageRef = this.refs.message;

    // Get the value of ref when a string ref is used
    var nameVal = nameRef.value;
    var messageVal = messageRef.value;

    if (typeof nameVal === 'string' && nameVal.trim().length > 0) {
      // Add a property to the `updates` object that will be passed to the `setState` method in the `Greeter` component
      updates.name = nameVal;

      // Clear out the input field
      nameRef.value = '';
    }

    if (typeof messageVal === 'string' && messageVal.trim().length > 0) {
      // Add a property to the `updates` object that will be passed to the `setState` method in the `Greeter` component
      updates.message = messageVal;

      // Clear out the textarea field
      messageRef.value = '';
    }

    // Call the method from the parent component that is passed through as a prop
    this.props.onNewValues(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* Referencing the input field to be accessed later using a string ref property */}
        <input type='text' ref='name' placeholder='Enter Name'/>
        <textarea ref='message' placeholder='Enter Message'></textarea>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;
