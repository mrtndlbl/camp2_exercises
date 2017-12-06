const greet = require("../greeting.js")

test("Check that greet return Hello MARTIN", () => {
  expect(greet("Martin")).toBe("Hello MARTIN!");
});

test("Check that greet return Hello WORLD", () => {
  expect(greet()).toBe("Hello WORLD!");
});
