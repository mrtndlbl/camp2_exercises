const open_weather = require("../open_weather.js")
require("sepia");

test("Check that weatherByCityName call the OpenWeather API", () => {
  expect.assertions(1);

  return open_weather.weatherByCityName("Paris")
    .then(temperature => {
      expect(temperature).toBeDefined();
    })
})
