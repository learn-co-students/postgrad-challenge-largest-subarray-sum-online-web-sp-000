function largestSubarraySum(arr) {
  //returns the largest sum of a sequence of ints in an array
  let sum = 0;
  let currentSum = 0;
  let negatives = 0;
  let i = 0;

  while (i < arr.length) {
    while (arr[i] < 0) {
      i++;
    }
    currentSum += arr[i];
    i++;
    while (arr[i] && arr[i] > 0) {
      currentSum += arr[i]
      i++
    }
    if (arr[i] < 0 || arr.length) {
      sum = Math.max(sum, currentSum);
    }
    while (arr[i] < 0) {
      negatives += arr[i];
      i++;
    }
    if (Math.abs(negatives) >= currentSum) {
      currentSum = 0;
      negatives = 0;
    } else {
      currentSum = currentSum + negatives;
      negatives = 0;
    }
  }

  return sum;
}