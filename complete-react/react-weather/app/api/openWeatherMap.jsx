var axios = require('axios');

const API_KEY = 'd7f038d7d6cdcb66fe843021ffb210fc';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + API_KEY;

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      // success
      function(response) {
        return response.data.main.temp;
      },

      // failure
      function(response) {
        console.dir('here2');
        console.dir(response);
        throw new Error(response.response.data.message);
      }
    );
  }
}
