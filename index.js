function largestSubarraySum(arr){
  // kadane's algorithm
  // O(n)
  let sumGlobal = 0;
  let sumCurrent = 0;

  for (let i=0; i < arr.length; i++){
    sumCurrent = Math.max(arr[i], (sumCurrent + arr[i]))

    if (sumCurrent > sumGlobal) {
      sumGlobal = sumCurrent
    }
  }

  return sumGlobal
}

function largestSubarraySum(arr, left=0, right=arr.length){
  // divide and conquer
  // O(log(n))

  if (right - left <= 1) {
    return 0;
  }

  let middle = Math.floor((left + right) / 2);
  let leftSum = largestSubarraySum(arr, left, middle);
  let rightSum = largestSubarraySum(arr, middle, right);
  let crossSum = maxCrossingSum(arr, left, middle, right);
  return Math.max(crossSum, leftSum, rightSum);
}

function maxCrossingSum(arr, left, middle, right){
  let leftSum = -Infinity;
  let rightSum = -Infinity;
  let sum = 0;

  // Include elements on left of mid
  for (let i = middle; i >= left; i--) {
    if (sum + arr[i] >= leftSum) {
      leftSum = sum + arr[i];
    }
    sum += arr[i];
  }
  sum = 0;

  // Include elements on right of mid
  for (let i = middle + 1; i < right; i++) {
    if (sum + arr[i] >= rightSum) {
      rightSum = sum + arr[i];
    }
    sum += arr[i];
  }
  return leftSum + rightSum;
}
