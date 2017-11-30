// See Sparta courses for the exercise summary
const car = {
  speed: 0,
  distance: 0,
  start: function() {
    this.speed = 0;
    this.distance = 0;
    return this
  },
  changeSpeed: function(newSpeed) {
    this.speed = newSpeed;
    return this;
  },
  drive: function(newMinutes) {
    // this.minutes = newMinutes;
    this.distance += this.speed / 60 * newMinutes ;
    return this;
  },
  showDistance: function() {
    return console.log(`${this.distance} Km`);
  }
}

module.exports = car;
