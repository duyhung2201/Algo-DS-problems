pub fn move_zeroes(nums: &mut Vec<i32>) {
    let mut last_non_zero = 0;
    for i in 0..nums.len() {
        if nums[i] != 0 {
            nums.swap(last_non_zero, i);
            last_non_zero += 1;
        }
    }
}
pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    let mut hash = std::collections::HashSet::new();

    for num in nums {
        if hash.contains(&num) {
            return true;
        }
        hash.insert(num);
    }

    false
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_move_zeroes() {
        let mut nums = vec![0, 1, 0, 3, 12];
        move_zeroes(&mut nums);
        assert_eq!(nums, vec![1, 3, 12, 0, 0]);
    }

    #[test]
    fn test_contains_duplicate() {
        assert_eq!(contains_duplicate(vec![1, 2, 3, 1]), true);
        assert_eq!(contains_duplicate(vec![1, 2, 3, 4]), false);
        assert_eq!(contains_duplicate(vec![1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
    }
}
