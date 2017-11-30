// // Your task is to create a function that will sort every number contained in a given array.
// //
// // For example:
// //
// // sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
// //
// // Note: You should not use Array.sort()

function sort(unsortedArray) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < unsortedArray.length; i++) {
      if (unsortedArray[i - 1] > unsortedArray[i]) {
        done = false;
        let tmp = unsortedArray[i - 1];
        unsortedArray[i - 1] = unsortedArray[i];
        unsortedArray[i] = tmp;
      }
    }
  }
  return unsortedArray;
}

console.log(sort([24, 7, 9, 72, -8]));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
