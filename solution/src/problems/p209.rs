use std::cmp::min;

pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
    let mut start: usize = 0;
    let mut res: usize = nums.len() + 1;
    let mut sum = 0;

    for end in 0..nums.len() {
        sum += nums[end];
        while (sum >= target) {
            res = min(res, end - start + 1);
            if (res == 1) {
                break;
            }
            sum -= nums[start];
            start += 1;
        }
    }

    return if res == nums.len() + 1 { 0 } else { res as i32 };
}
