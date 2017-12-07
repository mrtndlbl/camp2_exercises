const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByCity(cityName) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`,
      method: "GET",
    },
    function(error, response, result) {
      const json = JSON.parse(result);
      const tempInCelsius = `${json.main.temp} °C`;
      return tempInCelsius;
    }
  );
}

module.exports = weatherByCity;
