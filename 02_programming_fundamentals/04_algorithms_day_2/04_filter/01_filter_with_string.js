// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  // Your code here
  let newArray = [];
  if (str === "even") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    console.log(newArray);
    return newArray;
  } else if (str === "odd") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        newArray.push(array[i]);
      }
    }
    console.log(newArray);
    return newArray;
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    console.log(newArray);
    return newArray;
  }
}

filter([1,2,3,4,5,6], "od");

// do not remove this line, it is for tests
module.exports = filter;
