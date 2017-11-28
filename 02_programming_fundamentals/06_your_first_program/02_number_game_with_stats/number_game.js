const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = false;
let tryNumber = 3;

//Génération du nombre mystère
function getMisteryNumber() {
  return Math.floor(Math.random() * 100);
}

//Check if it is a number
function highOrLow(numberIn, mysteryNumber) {
  tryNumber = tryNumber - 1;
  if (tryNumber > 0) {
    if (!Number.isInteger(numberIn)) {
      console.log("This was not a number");
    } else if (numberIn < 0 || numberIn > 100) {
      console.log("The number is between 1 and 100");
    } else {
      // good number cases :
      if (numberIn === mysteryNumber) {
        // if you find the good number the first time display a wonderful message
        if (tryNumber === 2) {
          console.log("Wonderful, you find the mystery number at the first try !!");
          result = true;
        } else {
          console.log("You won!");
          result = true;
        }
        // wrong number cases :
      } else if (numberIn > mysteryNumber) {
        console.log("Too high");
      } else {
        console.log("Too low");
      }
    }
    //game over ?
    if (result) {
      reader.close();
    } else {
      reader.question("What is your number?\n", (numberIn) => {
        let integerNumber = parseInt(numberIn, 10);
        highOrLow(integerNumber, mysteryNumber);
      });
    }
  } else {
    console.log("Too much tries, you loose");
    reader.close();
  }
}

//Récupération du nombre utilisateur et appelle de la fonction highOrLow
reader.question("What is your number?\n", (numberIn) => {
  let integerNumber = parseInt(numberIn, 10);
  let mysteryNumber = getMisteryNumber();
  highOrLow(integerNumber, mysteryNumber);
});
