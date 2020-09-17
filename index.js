let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
 
function largestSubarraySum(array){
 // code to write here
 let currentSum = 0
 let largestSum = 0

 for (let number of array){
     currentSum = Math.max(0, (currentSum + number))
     largestSum = Math.max(largestSum, currentSum)
 }
 return largestSum
}
 
largestSubarraySum(array)