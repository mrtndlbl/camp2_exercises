const fetch = require("node-fetch");
const API_KEY = process.env.GOOGLE_PACES_API_WEB_SERVICE;
const open_weather = require("../02_open_weather/open_weather.js");

// googlePlaces("Decathlon Campus");

function googlePlaces(place) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((json) => {
      const coord = {
        lat: json.results[0].geometry.location.lat,
        lng: json.results[0].geometry.location.lng
      };
      console.log(`Place coordinates are ${coord.lat}, ${coord.lng}`);
      return coord;
    })
    .then((coord) => {
      const temp = open_weather.weatherByLatitudeAndLongitude(coord.lat, coord.lng);
      return temp;
    })
    .catch((error) => {
      console.warn(error);
    });
}

module.exports = googlePlaces;
