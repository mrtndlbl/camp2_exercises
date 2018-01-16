class Aquarium {
  constructor(fish, algae) {
    this.fishes = fish;
    this.algaes = algae;
  }
  addFish(fish) {
    this.fishes.push(fish);
  }
  addAlgae(algae) {
    this.algaes.push(algae);
  }
  passTime() {
    console.log("Number of algaes = " + this.algaes.length);
    console.log(this.fishes);
  }
  endTurn() {
    this.fishes.map(fish => {
      this.passTime();
      if (this.fishes.length === 0) {
        return console.log("No fishes in Aquarium");
      } else if (fish.kind === 0 && this.fishes.length > 1 && this.algaes.length === 0) {
        console.log(fish.name + " ate a fish");
        return this.fishes.pop();
      } else if (this.fishes.length >= 1 && this.algaes.length >= 1) {
        console.log(fish.name + " ate an algae");
        return this.algaes.pop();
      } else {
        return console.log("No algaes available in Aquarium");
      }
    });
  }
}

class Fish {
  constructor(name, sex, kind) {
    this.kind = kind;
    this.name = name;
    this.sex = sex;
  }
}

class Algae {
  constructor(length) {
    this.length = length;
  }
}

const myAquarium = new Aquarium([new Fish("Nemo", "M", 0)], []);
myAquarium.addFish(new Fish("Dory", "F", 1));
myAquarium.addAlgae(12);


while (myAquarium.fishes.length > 1 ) {
  myAquarium.endTurn();
}

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
