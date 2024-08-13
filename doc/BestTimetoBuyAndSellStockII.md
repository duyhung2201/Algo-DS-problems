# Dynamic Programming Solution

## Problem Breakdown

You are given an array `prices` where `prices[i]` represents the stock price on the ith day. The goal is to find the maximum profit you can achieve by buying and selling the stock. You can buy and sell on the same day, and you can perform multiple transactions as long as you only hold one share of the stock at any given time.

## Dynamic Programming Approach

To solve this problem using dynamic programming, let's break down the process into states and transitions:

### States

- `dp[i][0]`: Maximum profit on day `i` if you **do not hold** any stock.
- `dp[i][1]`: Maximum profit on day `i` if you **do hold** a stock.

### State Transitions

- **Not Holding a Stock on Day `i` (`dp[i][0]`)**:
  - If you did not hold a stock on day `i-1`, then `dp[i][0] = dp[i-1][0]`.
  - If you held a stock on day `i-1` and sold it today, the profit would be `dp[i-1][1] + prices[i]`.

  So, the formula is:
  \[
  dp[i][0] = \max(dp[i-1][0], dp[i-1][1] + prices[i])
  \]

- **Holding a Stock on Day `i` (`dp[i][1]`)**:
  - If you held a stock on day `i-1`, then `dp[i][1] = dp[i-1][1]`.
  - If you did not hold a stock on day `i-1` and bought one today, the profit would be `dp[i-1][0] - prices[i]`.

  So, the formula is:
  \[
  dp[i][1] = \max(dp[i-1][1], dp[i-1][0] - prices[i])
  \]

### Initialization

- On day 0:
  - `dp[0][0] = 0`: No stock, no profit.
  - `dp[0][1] = -prices[0]`: The profit is negative because you've bought a stock.

### Final Answer

- After processing all days, the answer will be `dp[n-1][0]`, where `n` is the length of the `prices` array. This represents the maximum profit on the last day when you do not hold any stock.

## Space Optimization

Instead of maintaining a 2D DP table, you can optimize the solution to use O(1) space by only keeping track of the previous day's values:

```rust
fn max_profit(prices: Vec<i32>) -> i32 {
    let n = prices.len();
    if n == 0 {
        return 0;
    }
    
    let mut dp_0 = 0; // max profit if not holding stock
    let mut dp_1 = -prices[0]; // max profit if holding stock
    
    for i in 1..n {
        let new_dp_0 = dp_0.max(dp_1 + prices[i]);
        let new_dp_1 = dp_1.max(dp_0 - prices[i]);
        dp_0 = new_dp_0;
        dp_1 = new_dp_1;
    }
    
    dp_0
}
