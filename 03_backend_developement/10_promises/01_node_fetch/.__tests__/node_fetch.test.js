require("sepia");
const node_fetch = require("../node_fetch.js");

test("Check that the function fetchBrandName return the brand name", () => {
  expect.assertions(1);

  return node_fetch.fetchBrandName()
    .then(brand => {
      expect(brand).toBe("QUECHUA");
    })
})
