/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/
function range(startNumber, endNumber) {
  let array = [];
  if (startNumber < endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
      array.push(i);
    }
    return array;
  } else {
    for (let i = startNumber; i >= endNumber; i--) {
      array.push(i);
    }
    return array;
  }
}

function isDivisibleBy3(numberIn) {
  return Number.isInteger(numberIn / 3);
}
function isDivisibleBy5(numberIn) {
  return Number.isInteger(numberIn / 5);
}

function fizzBuzz(list) {
  let newArray = [];
  for (let i = 0; i < list.length; i++) {
    if (isDivisibleBy3(list[i]) && isDivisibleBy5(list[i])) {
      newArray.push("FizzBuzz");
    } else if (isDivisibleBy3(list[i])) {
      newArray.push("Fizz");
    } else if (isDivisibleBy5(list[i])) {
      newArray.push("Buzz");
    } else {
      newArray.push(list[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

fizzBuzz(range(1,20));



module.exports = fizzBuzz;
