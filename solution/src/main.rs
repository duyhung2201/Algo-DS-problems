use std::cmp::{self, min};
use std::vec;
mod problems;

use problems::p209::min_sub_array_len;
use problems::p232::Stack;
use problems::p238::product_except_self;
use problems::p52::max_sub_array;

struct Solution;

impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let mut rows = vec![vec![0; 9]; 9];
        let mut cols = vec![vec![0; 9]; 9];
        let mut boxs = vec![vec![0; 9]; 9];

        for i in 0..9 {
            for j in 0..9 {
                if board[i][j] != '.' {
                    let num = board[i][j] as usize - '1' as usize;
                    let box_id = (i / 3) * 3 + j / 3;

                    if rows[i][num] != 0 || cols[j][num] != 0 || boxs[box_id][num] != 0 {
                        return false;
                    } else {
                        rows[i][num] = 1;
                        cols[j][num] = 1;
                        boxs[box_id][num] = 1;
                    }
                }
            }
        }
        return true;
    }

    pub fn jump(nums: Vec<i32>) -> i32 {
        let mut jump_count = 0;
        let mut pos = 0;
        let mut max_reach = pos + nums[pos] as usize;

        while pos < nums.len() - 1 {
            let mut temp = pos;
            if max_reach >= nums.len() - 1 {
                return jump_count + 1;
            }

            for n_pos in pos + 1..max_reach + 1 {
                let n_reach = n_pos + nums[n_pos] as usize;
                if n_reach > max_reach {
                    max_reach = n_reach;
                    temp = n_pos;
                }
            }
            pos = temp;
            jump_count += 1;
        }

        return jump_count;
    }

    pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
        let n = gas.len();
        let mut total_tank = 0;
        let mut curr_tank = 0;
        let mut start = 0;

        for i in 0..n {
            total_tank += gas[i] - cost[i];
            curr_tank += gas[i] - cost[i];

            if curr_tank < 0 {
                start = i + 1;
                curr_tank = 0;
            }
        }

        return if total_tank > 0 { start as i32 } else { -1 };
    }

    //p198
    pub fn rotate(nums: &mut Vec<i32>, k: i32) {
        if nums.len() == 0 {
            return;
        }
        let n = nums.len();
        let k = k as usize % n;
        let mut count = 0;
        let mut start = 0;

        while count < n {
            let mut current = start;
            let mut prev_val = nums[start];

            loop {
                let idx = (current + k) % n;
                let current_value = nums[idx];
                nums[idx] = prev_val;
                prev_val = current_value;
                current = idx;
                count += 1;

                if current == start {
                    break;
                }
            }
            start += 1;
        }
    }
}

fn main() {
    let nums = [1, 2, 3, 4, 5].to_vec();
    let res = min_sub_array_len(15, nums);
    println!("{}", res);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_rotate() {
        let mut nums = vec![1, 2, 3, 4, 5, 6, 7];
        Solution::rotate(&mut nums, 3);
        assert_eq!(nums, vec![5, 6, 7, 1, 2, 3, 4]);

        nums = vec![-1,-100,3,99];
        Solution::rotate(&mut nums, 2);
        assert_eq!(nums, vec![3,99,-1,-100])
    }
}
