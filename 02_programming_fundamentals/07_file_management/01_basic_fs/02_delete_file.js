// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
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

function deleteFile(filename) {
  if (fileExist(filename) && isAFile(filename)) {
    fs.unlinkSync(filename);
    return true;
  } else {
    return false;
  }
}

module.exports = deleteFile
