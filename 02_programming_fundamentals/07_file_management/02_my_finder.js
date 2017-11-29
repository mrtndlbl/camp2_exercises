const fs = require("fs");
const path = require("path");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let directoryList;

function myFinder(directory) {
  //Affichage du contenu du répertoire courant
  fs.readdir(directory, (error, data) => {
    if (error) {
      console.warn(error);
    }
    directoryList = data.map((file, index) => index.toString() + ". " + file);
    console.log(directoryList);

    reader.question("Choose a number > ",(fileNumber) => {
        myFinder(data[fileNumber]);
      });
  })
}

myFinder("test");
