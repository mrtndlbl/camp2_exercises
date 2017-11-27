const thisIsThePlayer = (callback) => {
  const player = {
    name: "Spartacus",
    life: 100,
    strength: 100,
    agility: 100
  };
  callback(player);
};

// Write a function sayHello that greets: "Hello, Spartacus". (Where "Spartacus" is the player name)

thisIsThePlayer(function sayHello(player) {
  console.log(`Hello, ${player.name}`);
});
