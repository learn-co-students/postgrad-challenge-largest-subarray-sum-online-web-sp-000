function largestSubarraySum(array){
  
  let target = 0;
  let reversedArray = [...array].reverse();
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

	for (let i = 0; i < (array.length - 1); i++){
      const arr1Sum = array.slice(i).reduce(reducer);
      const arr2Sum = reversedArray.slice(i).reduce(reducer);

      const arr3Sum = array.slice(i, -1).reduce(reducer);
      const arr4Sum = reversedArray.slice(i, -1).reduce(reducer);

      target < arr1Sum ? target = arr1Sum : undefined;
      target < arr2Sum ? target = arr2Sum : undefined;

      target < arr3Sum ? target = arr3Sum : undefined;
      target < arr4Sum ? target = arr4Sum : undefined;

  }
  return target;
}
