// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer
function toSquare (number) {
  return number * number;
}

function squareDigits(number) {
  // Your code here
  const stringNumber = number.toString();

  let stringNumberArray = [];
  for (let i = 0; i < stringNumber.length; i++) {
    stringNumberArray.push(stringNumber.charAt(i));
  }

  const toSquareArray = stringNumberArray.map(toSquare);
  const newString = toSquareArray.join('');
  return parseInt(newString, 10)

}

squareDigits(9129);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
