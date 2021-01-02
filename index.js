
let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]


function largestSubarraySum(array) {
    let largest = 0;
    let currentTotal = 0;
    while (array.length !== 0){
       for (let i = 0; i < array.length; i++){
           currentTotal += array[i];
           if (currentTotal > largest){
               largest = currentTotal
           }
       } 
       currentTotal = 0;
       array.shift()
    }

    return largest

 }



