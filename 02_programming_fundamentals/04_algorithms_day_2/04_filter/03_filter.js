// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function isEvenNumbers(number){
  return number % 2 === 0;
}
function isOddNumbers(number){
  return number % 2 !== 0;
}

function filter(array, fn) {
  // Your code here
  return array.filter(fn);
}

filter([0,1,2,3,4,5,6], isOddNumbers);

// do not remove this line, it is for tests
module.exports = filter;
