// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

let unsortedArray = [24, 7, 9, 72, -8];
function sort(unsortedArray) {
  // Your code here
  let i = 0;
  //Comparaison de 2 caractères consécutifs dans le tableau
  while (i < unsortedArray.length - 1) {
    if (unsortedArray[i+1] !== undefined && isSmallerThanNext(unsortedArray[i],unsortedArray[i+1])) {
      //Si Number [i] inférieur à [i+1] on ne change pas le tableau, et on incrémente la boucle
      console.log("no change in array");
      i++;
    } else {
      //Sinon on inverse les 2 numéros dans le tableau
      let smallNumber = unsortedArray[i];
      unsortedArray[i] = unsortedArray[i+1];
      unsortedArray[i+1] = smallNumber;
      console.log(unsortedArray[i],unsortedArray[i+1]);
    }
  }
  console.log(unsortedArray);
}

function isSmallerThanNext(numberA, numberB) {
  return numberA < numberB;
}
sort(unsortedArray);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
