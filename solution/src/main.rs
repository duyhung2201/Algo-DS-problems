use rand::Rng;
use std::cmp::{self, min};
use std::collections::{HashMap};
use std::vec;
use rand::seq::SliceRandom;

struct Solution;

struct RandomizedSet {
    map: HashMap<i32, usize>,
    v: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RandomizedSet {
    fn new() -> Self {
        RandomizedSet {
            map: HashMap::new(),
            v: vec![],
        }
    }

    fn insert(&mut self, val: i32) -> bool {
        if self.map.contains_key(&val) {
            return false;
        }
        self.map.insert(val, self.v.len());
        self.v.push(val);
        return true;
    }

    fn remove(&mut self, val: i32) -> bool {
        match self.map.remove(&val) {
            Some(index) => {
                self.v.swap_remove(index);
                if index < self.v.len() {
                    self.map.insert(self.v[index], index);
                }
                true
            },
            None => false
        }
    }
    fn get_random(&self) -> i32 {
        return *self.v.choose(&mut rand::thread_rng()).unwrap();
    }
}

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
}

fn main() {
    let val = 1;
    let mut obj = RandomizedSet::new();
    obj.insert(2);
    let ret_1: bool = obj.insert(val);
    println!("{:?}", ret_1);
    let ret_3: i32 = obj.get_random();
    println!("{:?}", ret_3);
    let ret_2: bool = obj.remove(val);
    println!("{:?}", ret_2);
}
