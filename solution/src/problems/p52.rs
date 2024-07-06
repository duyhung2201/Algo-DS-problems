pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut max_sum = nums[0];
    let mut current_sum =  nums[0];

    for i in 1..nums.len() {
        current_sum = current_sum.max(0) + nums[i];
        max_sum = max_sum.max(current_sum)
    }

    return max_sum;
}

#[cfg(test)]
mod tests {
    use super::*; // Import the functions from the outer module

    #[test]
    fn test_positive_numbers() {
        let nums = vec![1, 2, 3, 4];
        assert_eq!(max_sub_array(nums), 10);
    }

    #[test]
    fn test_negative_and_positive_numbers() {
        let nums = vec![-2, 1, -3, 4, -1, 2, 1, -5, 4];
        assert_eq!(max_sub_array(nums), 6);
    }

    #[test]
    fn test_all_negative_numbers() {
        let nums = vec![-1, -2, -3, -4];
        // The largest sum is the least negative number
        assert_eq!(max_sub_array(nums), -1);
    }
}