// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

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

function copyPaste(sourceFilename, targetFilename) {
  if (fileExist(sourceFilename) && isAFile(sourceFilename)) {
    fs.copyFileSync(sourceFilename, targetFilename, fs.constants.COPYFILE_EXCL);
    return true;
  }
  return false;
}

module.exports = copyPaste;
