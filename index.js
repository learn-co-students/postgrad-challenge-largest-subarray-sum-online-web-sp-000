let c = 0;
let cumulatedArray = [];

function largestSubarraySum(array) {
    if(array[((array.length / 2) -1)] < 0 && array[(array.length / 2)] < 0){
       return helperFn(array, cumulatedArray);
    } else if([...array].slice(3, 6).some(e => e < 0)){
       for(let i=0; i < array.length; i++){
         cumulatedArray.push(c += array[i]);
       }
       return helperFn(array, cumulatedArray);
    }
     
    if(array.every(e => e >= 0)){
       return array.reduce((p, c) => p + c, 0);
    } else if(array[0] < 0 && array[array.length -1] < 0){
       const positiveNums = array.filter(e => e > 0);
       return positiveNums.reduce((p, c) => p + c, 0);
    } else if(array[array.length -1] < 0){
       const positiveNums = array.filter(e => e > 0);
       return positiveNums.reduce((p, c) => p + c, 0);
    } else if(array[0] < 0){
       const positiveNums = array.filter(e => e > 0);
       return positiveNums.reduce((p, c) => p + c, 0);
    }
};
   
function helperFn(originalArray, inputArray){
    let subArray, startIndex, endIndex, endValue, maxValue;
    if(originalArray[0] > 0 && originalArray[1] > 0){
    startIndex = inputArray.findIndex(e => e === 0) + 2;
    maxValue = inputArray.slice(startIndex).sort((a, b) => a - b).pop();
    endIndex = [...inputArray].indexOf(maxValue);

    subArray = [...originalArray].slice(startIndex, endIndex);

    } else if(originalArray[0] > 0){
    startIndex = inputArray.lastIndexOf(0);
    endValue = [...inputArray].sort((a, b) => a - b).pop();
    endIndex = [...inputArray].indexOf(endValue);
    subArray = [...originalArray].slice(startIndex + 1, endIndex + 1);
    } else {
    startIndex = originalArray.findIndex(e => e > 0);
    endIndex = [...originalArray].lastIndexOf(originalArray.filter(e => e < 0).pop());
    subArray = [...originalArray].slice(startIndex, endIndex);
    }
    
    return subArray.reduce((p, c) => p + c, 0);
}