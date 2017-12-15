require("sepia");
const googlePlaces = require("../google_places.js")

test("Check that googlePlaces return the temperature at Decathlon Campus", () => {
  expect.assertions(1);

  return googlePlaces("Decathlon Campus")
    .then(temp => {
      expect(temp).toBeDefined();
    })
})
