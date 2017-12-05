const container = require("./container");

function expresso() {
  return container.consumeLitersOfCoffee(0.08);
}

function longCoffee() {
  return container.consumeLitersOfCoffee(0.15);
}

function fillWithLitersOfCoffee(litersOfCoffee) {
  return container.putLitersOfCoffee(litersOfCoffee);
}

module.exports = {
  expresso: expresso,
  longCoffee: longCoffee,
  fillWithLitersOfCoffee: fillWithLitersOfCoffee
};
