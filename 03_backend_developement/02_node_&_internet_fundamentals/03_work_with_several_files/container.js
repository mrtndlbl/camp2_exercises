const container = {
  litersOfCoffee: 0,
};

function putLitersOfCoffee(numberOfLiters) {
  container.litersOfCoffee += numberOfLiters;
  return true;
}

function consumeLitersOfCoffee(numberOfLiters) {
  if (container.litersOfCoffee >= numberOfLiters) {
    container.litersOfCoffee -= numberOfLiters;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  container: container,
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
