const container = {
  litersOfCoffee: 0,
};

function fillWithLitersOfCoffee(numberOfLiters) {
  container.litersOfCoffee =+ numberOfLiters;
  return true;
}

function consumeLitersOfCoffee(numberOfLiters) {
  if (numberOfLiters >= container.litersOfCoffee) {
    container.litersOfCoffee =- numberOfLiters;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  fillWithLitersOfCoffee: fillWithLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
