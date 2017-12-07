const weatherByLocation = require("../02_weather_forecast_by_location/weatherByLocation");
const request = require("request");
const API_KEY = process.env.GOOGLE_PACES_API_WEB_SERVICE;
const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];

function getCityfromArray(arrayOfAdresses) {
  const cities = arrayOfAdresses.map((address) =>
    address.substring(address.lastIndexOf(" ")+1, address.length)
  );
  return cities;
}

function getLatandLng(cities) {
  cities.map( (city) =>
    request(
      {
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY}`,
        method: "GET",
      },
      function(error, response, result) {
        const json = JSON.parse(result);
        const coord = {
          lat: json.results[0].geometry.location.lat,
          lng: json.results[0].geometry.location.lng
        };
        return weatherByLocation.weatherByLatitudeAndLongitude(coord.lat, coord.lng);

      }
    )
  );
}

function forecastInventoryByWeather(stores) {
  const cities = getCityfromArray(stores);
  return getLatandLng(cities);
}

forecastInventoryByWeather(stores);

module.exports = {
  getLatandLng: getLatandLng,
  getCityfromArray: getCityfromArray,
  forecastInventoryByWeather: forecastInventoryByWeather
};
