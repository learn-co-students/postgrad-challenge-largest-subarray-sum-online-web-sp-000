let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]


function largestSubarraySum(array){

    let counter = 0;

    let result;

    for (let x = 0; x < array.length; x++) {
        for (let i = x; i < array.length; i++) {
            let sum = array.slice(0,i+1).reduce((a, b) => a+b);

            if (result === undefined || sum > counter) {result = array.slice(0,i+1); counter = sum}
        }
    }   
    return counter;
}

console.log(largestSubarraySum(array));