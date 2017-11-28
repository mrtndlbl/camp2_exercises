// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const cards = ["🐰", "🐰", "🎃", "🎃", "🌲", "🌲"];

//Mélanger les cartes
//function randomCards() {
//  let randomIndex = Math.floor(Math.random() * 6);
//  console.log(randomIndex);
//  let randomArray = [" "," "," "," "," "," "];
//  randomArray = randomArray.splice(randomIndex, 0, cards[]);
//  console.log(randomArray);
//}
//randomCards();

//Lancement du jeu
//Récupération des cartes choisies par l'utilisateur
//Appel des 3 fonctions de vérification et d'affichage
function startGame() {
  reader.question(
    "Choose the first card (Please enter an integer between 0 and 5) :\n",
    card1 => {
      let integerCard1 = parseInt(card1, 10);
      singleCardCheckin(integerCard1);
      reader.question("Choose the second card :\n", card2 => {
        let integerCard2 = parseInt(card2, 10);
        singleCardCheckin(integerCard2);
        twoCardsCheckin(integerCard1, integerCard2);
        cardsToDisplay(integerCard1, integerCard2);
      });
    }
  );
}

//Vérifier que l'utilisateur a saisi un entier entre 0 et 5
function singleCardCheckin(card) {
  if (!Number.isInteger(card)) {
    console.log("You have to choose an integer\n       GAME OVER");
    process.exit();
  } else if (card < 0 || card > 5) {
    console.log("You have to choose a number between 0 and 5 !\n       GAME OVER");
    process.exit();
  }
}

//Vérifier que l'utilisateur a saisi 2 cartes différentes
function twoCardsCheckin(integerCard1, integerCard2) {
  if (integerCard1 === integerCard2) {
    console.log("You choosed 2 times the same card\n       GAME OVER");
    process.exit();
  }
}

//Affichage des cartes retournées dans un nouveau tableau
//Vérifier le statut des cartes retournées
//Si elles sont identiques, fin du jeu
//Si elle sont différentes, on rappelle la fonction principale startGame()
function cardsToDisplay(integerCard1, integerCard2) {
  let cardsReturned = ["🂠", "🂠", "🂠", "🂠", "🂠", "🂠"];
  cardsReturned[integerCard1] = cards[integerCard1];
  cardsReturned[integerCard2] = cards[integerCard2];
  console.log(cardsReturned);
  if (cardsReturned[integerCard1] === cardsReturned[integerCard2]) {
    console.log("You won");
    process.exit();
  } else {
    startGame();
  }
}
startGame();
