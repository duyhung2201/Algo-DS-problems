use std::vec;

pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut left = 1; let mut right = 1;
    let mut res = vec![1; n];


    for i in 0..nums.len() {
        res[i] *= left;
        left *= nums[i];
        res[n-i-1] *= right;
        right *= nums[n-i-1];
    }

    res
}