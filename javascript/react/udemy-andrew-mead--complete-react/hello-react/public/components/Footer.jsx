var React = require('react');

// Presentational Component
var Footer = React.createClass({
  render: function() {
    var copyright = this.props.copyright;

    return (
      <div>
        <h1>{copyright || '© Default copyright 2020'}!</h1>
      </div>
    );
  }
});

module.exports = Footer;
