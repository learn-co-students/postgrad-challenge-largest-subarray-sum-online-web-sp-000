// Kadene's algorithm - the maximum subarray at each element is either the current element itself, or the current element 
// plus the maximum subarray ending at the previous element.

function largestSubarraySum(array){

    let currentMax = array[0];
    let globalMax = array[0];
        
        for (let i = 1; i < array.length; i++) {

            currentMax = Math.max(array[i], array[i] + currentMax)

            if (currentMax > globalMax) {globalMax = currentMax}
            
        }
    
    return globalMax;
}
