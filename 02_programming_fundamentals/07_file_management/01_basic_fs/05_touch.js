// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const fs = require("fs");
const path = require("path");

//Check existing file
function fileExist(filename) {
  try {
    fs.accessSync(filename);
    return true;
  } catch (e) {
    return false;
  }
}

function isAFile(filename) {
  const stats = fs.lstatSync(filename);
  return stats.isFile();
}

//The famous command touch
function touch(filename) {
  // Check if the file exist in the directory
  // If yes, we read it to update the date
  if (fileExist(filename) && isAFile(filename)) {
    fs.readFile(filename, (error, data) => {
      if (error) {
        console.warn(error);
      }
      console.log("File already existing");
    });
    //If no, we create it
  } else {
  fs.open(filename, 'w', (error, file) => {
    if (error) {
      return console.warn(error);
    }
    console.log('Saved!');
    });
  }
}

touch("hellomartin");
module.exports = touch;
