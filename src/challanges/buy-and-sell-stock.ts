/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * prices = [7,1,5,3,6,4]; output: 5
 * 
 */


// related approach to Kadane's Algorithm

function maxProfit(prices: number[]): number {
  let buyPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else if (prices[i] - buyPrice > maxProfit) { // prices[i] terá que ser sempre maior e a diferenca também.
      maxProfit = prices[i] - buyPrice;
    }
  }
  return maxProfit;
}
;