const request = require("request");
const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(lat, lon) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`,
      method: "GET",
    },
    function(error, response, result) {
      const json = JSON.parse(result);
      // console.log(json);
      return json.list.map((object) => {
        return {
          date: object.dt_txt,
          temperature: object.main.temp,
          weather: object.weather[0]
        };
      });
    }
  );
}

function weatherByZipcode(zipCode, countryCode) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countryCode}&APPID=${API_KEY}&units=metric`,
      method: "GET",
    },
    function(error, response, result) {
      const json = JSON.parse(result);
      const weatherArray = json.list.map((object) => {
        return {
          date: object.dt_txt,
          temperature: object.main.temp,
          weather: object.weather[0]
        };
      }
      );
      // console.log(weatherArray);
      return weatherArray;
    }
  );
}

module.exports = {
  weatherByLatitudeAndLongitude,
  weatherByZipcode};
