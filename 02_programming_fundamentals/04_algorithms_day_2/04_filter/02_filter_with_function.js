// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function isEvenNumbers(number){
  return number % 2 === 0;
}
function isOddNumbers(number){
  return number % 2 !== 0;
}

function filter(array, fn) {
  // Your code here
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

filter([1,2,3,4,5,6], isEvenNumbers);


// do not remove this line, it is for tests
module.exports = filter;
