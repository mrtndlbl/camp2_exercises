const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY;

//weatherByCityName("Paris");
//weatherByLatitudeAndLongitude(32.661343, 51.680374);

function weatherByCityName(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
    .then((res) => res.json())
    .then((json) => json.main.temp)
    .then((temp) => {
      console.log(`Temperature of ${city} is ${temp}°C`);
      return temp;
    })
    .catch((error) => {
      console.warn(error);
    });
}

function weatherByLatitudeAndLongitude(lat, lon) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
    .then((res) => res.json())
    .then((json) => json.main.temp)
    .then((temp) => {
      console.log(`Temperature at ${lat}, ${lon} is ${temp}°C`);
      return temp;
    })
    .catch((error) => {
      console.warn(error);
    });
}

module.exports = {
  weatherByCityName: weatherByCityName,
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude
};
