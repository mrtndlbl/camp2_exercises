// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
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

function copyPaste(sourceFilename, targetFilename) {
  if (fileExist(sourceFilename) && isAFile(sourceFilename)) {
    fs.copyFileSync(sourceFilename, targetFilename, fs.constants.COPYFILE_EXCL);
    return true;
  }
  return false;
}

function cutPaste(sourceFilename, targetFilename) {
  if (copyPaste(sourceFilename, targetFilename)) {
    return deleteFile(sourceFilename);
  }
  return false;
}

module.exports = cutPaste;
