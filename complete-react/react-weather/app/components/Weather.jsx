const React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var self = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(
      // success
      function(temp){
        self.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },

      // failure
      function(errorMessage){
        alert(errorMessage);
        self.setState({
          isLoading: false
        });
      }
    );
  },

  render: function() {
    var {isLoadingg, temp, location} = this.state;

    function renderMessage() {
      if (isLoadingg) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
