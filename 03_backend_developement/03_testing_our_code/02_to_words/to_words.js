function toWords(sentence) {
  if (sentence) {
    const allWords = sentence.split(/[.?!, :]+/);
    return allWords.filter(word => word !== "");
  } else {
    return false;
  }
}

module.exports = toWords;
