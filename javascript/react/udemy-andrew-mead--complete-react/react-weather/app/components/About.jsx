const React = require('react');

// Example of a basic component
// var About = React.createClass({
//   render: function() {
    // return (
    //   <h3>About Component</h3>
    // );
//   }
// });

// Example of a shortened version of a component
// In order for this to work, it needs to:
  // Only contain a render function
  // Not include state
var About = function(props) {
  return (
    <h3>About Component</h3>
  );
};

// Another shortened version of the same example
//var About = (props) => <h3>About Component</h3>;



module.exports = About;
