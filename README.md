# Largest Subarray Sum

## Problem

Given an array of integers find a sequence with the largest sum. 

Take a look at an example:

```javascript  
let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
 // code to write here
 const running_sum = Array(array.length).fill(0);
 var currentMax = 0;
 var runningSum[0] = array[0];
 for(var i=1; i<array.lenth; i++)
 {
    var newSum = runningSum[i-1] + array[i]
    if(newSum > array[i])
      runningSum[i] = newSum
    else
      runningSum[i] = array[i]
    end 
    if(runningSum[i] > currentMax)
    {      
      currentMax = runningSum[i]
    }
  }
  return currentMax
 
}

largestSubarraySum(array)
// 16
```

The largest subarray in this example is [5, 3, -7, 4, 5, 6], and its sum is 5 + 3 - 7 + 4 + 5 + 6 = 16

## Process

Run `yarn install` or `npm install` to get started.

Write your `largestSubarraySum` function in `index.js`.

You can test your solution by running `yarn test` or `npm run test` (depending on whether you have yarn or npm installed).

This problem is hard, but it has many different solutions.  

Use it as a mechanism to focus on process.  Think about this problem as a practice in breaking down problems, and knowing when to retreat from a potential solution.  Remember.

A couple of leading questions that might help you get started:

* What are some examples of input arrays where the solution becomes obvious? What can you learn from those obvious cases?
* What would a naive solution look like, that tested every possible combination?

## Challenge - Time Complexity

After you've implemented a basic solution, consider how many operations it will use to find an answer, based on the size of the input array. If you can, write down the Big O time complexity of your solution.

How could you make your solution faster? Try to improve your solution's runtime, or explain why you think your solution is as fast as possible.
