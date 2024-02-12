use std::cmp::{self, min};

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

    pub fn h_index(citations: Vec<i32>) -> i32 {
        let mut paper_count = vec![0; 5001];
        let n = citations.len();

        for c in &citations {
            paper_count[cmp::min(*c as usize, n)] += 1;
        }

        let mut h_count = 0;
        for i in (0..n+1).rev() {
            h_count += paper_count[i];

            if h_count >= i {
                return i as i32;
            }
        }

        return 0;
    }
}

fn main() {
    let nums = vec![3, 0, 6, 1, 5];
    let result = Solution::h_index(nums);
    println!("{:?}", result)
}
