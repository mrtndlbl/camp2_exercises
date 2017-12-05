const container = require("./container");

const machine = {
  expresso: function() {
    container.consumeLitersOfCoffee(0.08);
  },
  longCoffee: function() {
    container.consumeLitersOfCoffee(0.15);
  },
  fillWithLitersOfCoffee: function(numberOfLiters) {
    container.fillWithLitersOfCoffee(numberOfLiters);
  }
};

machine.fillWithLitersOfCoffee(0.5);
console.log(machine.expresso()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => false
console.log(machine.expresso()); // => true
console.log(machine.expresso()); // => false

module.exports = {
  machine: machine
};
