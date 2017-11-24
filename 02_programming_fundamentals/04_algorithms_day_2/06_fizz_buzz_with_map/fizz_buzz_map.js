/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/
function isDivisibleBy3(numberIn) {
  return Number.isInteger(numberIn / 3);
}

function isDivisibleBy5(numberIn) {
  return Number.isInteger(numberIn / 5);
}

function fizzBuzzTest(numberIn) {
  if (isDivisibleBy3(numberIn) && isDivisibleBy5(numberIn)) {
    return "FizzBuzz";
  } else if (isDivisibleBy3(numberIn)) {
    return "Fizz";
  } else if (isDivisibleBy5(numberIn)) {
    return "Buzz";
  } else {
    return numberIn;
  }
}

function fizzBuzz(list) {
  let newArray = [];
  newArray = list.map(fizzBuzzTest);
  console.log(newArray);
  return newArray;
}

fizzBuzz([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
module.exports = fizzBuzz;
