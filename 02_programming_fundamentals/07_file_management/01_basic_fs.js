const fs = require("fs");
const path = require("path");

//Get the current directory
function pwd() {
  console.log(path.resolve());
  return path.resolve();
}

//RM for the win
function deleteFile(filename) {
  fs.unlink(filename, (error) => {
    if(error) {
      return console.warn(error);
    }
    console.log("File deleted!");
  });
}

//Cmd-C/Cmd-V as a function
function copyPaste(sourceFilename, targetFilename) {
  fs.readFile(sourceFilename, (error, data) => {
    if (error) {
      console.warn(error);
    }
    fs.writeFile(targetFilename, data, (error) => {
      if(error) {
        return console.warn(error);
      }
      console.log("The file was duplicated!");
    });
  });
}

//Cmd-X/Cmd-V as a function
function cutPaste(sourceFilename, targetFilename) {
  copyPaste(sourceFilename, targetFilename);
  deleteFile(sourceFilename);
}

//Check existing file
function fileExist(filename) {
  try {
    fs.accessSync(filename);
    return true;
  } catch (e) {
    return false;
  }
}

//The famous command touch
function touch(filename) {
  //Check if the file exist in the directory
  //If yes, we read it to update the date
  if (fileExist(filename)) {
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
