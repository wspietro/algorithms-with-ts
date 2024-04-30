/**
 * Largest Sum Contiguous Subarray (Kadane’s Algorithm)
 * 
 * Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 
 */


function kadenes(inputArray: number[]): number {
  let current_sum = inputArray[0];
  let max_sum = inputArray[0];

  for (let i = 1; i < inputArray.length; i++) {
    // criar novo array ou somar com anterior?
    // soma é maior que o item index? ...
    current_sum = (inputArray[i] + current_sum > inputArray[i]) ? inputArray[i] + current_sum : inputArray[i]

    if (current_sum > max_sum) {
      max_sum = current_sum
    }
  }
  return max_sum;
}
