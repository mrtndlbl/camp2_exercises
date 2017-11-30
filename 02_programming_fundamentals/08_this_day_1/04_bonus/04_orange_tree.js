// See Sparta courses for the exercise summary
const orangeTree = {
  height: 0,
  age: 0,
  oranges: 43,
  alive: true,
  pickAnOrange: function() {
    if (this.oranges > 0) {
      this.oranges -= 1;
      return true;
    } else {
      return false;
    }
  },
  ageOneYear: function() {
    console.log(`orangeTree\'s age = ${this.age}`);
    console.log(`alive = ${this.alive}`);
    this.age += 1;
    if (this.age >= 5 && this.age < 10) {
      this.oranges = 10;
      this.height += 25;
      return this;
    } else if (this.age < 10) {
      this.height += 25;
      return this;
    } else if (this.age < 20) {
      this.oranges = 20;
      this.height += 10;
      return this;
    } else if (this.age < 40) {
      this.oranges = 5
      return this;
    } else if (this.age >= 40 && this.age < 50 ) {
      this.oranges = 0;
      return this;
      //A partir de 50 ans la probabilité de mourir augmente
    } else if (this.age > 50 && this.age <= 60) {
      this.alive = Math.random() >= 0.1;
      return this;
    } else if (this.age > 60 && this.age <= 70) {
      this.alive = Math.random() >= 0.2;
      return this;
    } else if (this.age > 70 && this.age <= 80) {
      this.alive = Math.random() >= 0.3;
      return this;
    } else if (this.age > 80 && this.age <= 90) {
      this.alive = Math.random() >= 0.4;
      return this;
    } else if (this.age > 90 && this.age <= 100) {
      this.alive = Math.random() >= 0.5;
      return this;
    } else if (this.age > 100) {
      this.alive = false;
      return this;
    } else {
      return this;
    }
  },
  seed: function() {
    this.alive = true;
    this.age = 0;
    this.oranges = 0;
    this.height = 0;
    return this;
  }
}

module.exports = orangeTree;
