// let array = [-1, -1, -5, -3, -7, -4, -5, -6, -100, -4];
// let array2 = [1, 100, 4, 15, 9, 30, -1];
// let array3 = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];

// function largestSubarraySum(array) {

//   if (array.every((n) => n > 0)) {
//     return array.reduce(addArray)
//   } else if (array.every((n) => n < 0)) {
//     return 0
//   } else {
//     let firstIndex = findIndex(array) + 1;
//     let lastIndex = array.length - findIndex(array.slice().reverse()) - 1;
//     let subArray = array.slice(firstIndex, lastIndex)
//     return subArray.reduce(addArray);
//   }

// }

// function findIndex(array) {
//   let foundPattern = false;
//   let foundIndex;

//   array.forEach((n, idx) => {
//     if (n < 0 && array[idx + 1] > 0 && !foundPattern) {
//       foundPattern = true;
//       foundIndex = idx;
//     }
//   });
//   console.log(foundIndex);
//   return foundIndex;
// }

// let addArray = (total, n) => total + n;

// // largestSubarraySum(array3);

let largestSubarraySum = (array) => {
  let currentSum = 0;
  let largestSum = 0;

  for (let number of array) {
    currentSum = Math.max(0, currentSum + number);
    largestSum = Math.max(largestSum, currentSum);
  }
  return largestSum;
};
