/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	const n = nums.length;

	if (n < 2) return 0;

	if (nums[0] > nums[1]) return 0;
	if (nums[n - 1] > nums[n - 2]) return n - 1;

	let startIdx = 1;
	let endIdx = n - 2;

	while (startIdx <= endIdx) {
		let mid = Math.floor((startIdx + endIdx) / 2);

		const adjLeft = nums[mid - 1];
		const adjRight = nums[mid + 1];

		if (adjLeft < nums[mid] && nums[mid] > adjRight) {
			return mid;
		} else if (adjLeft > nums[mid]) {
			endIdx = mid - 1;
		} else if (adjRight > nums[mid]) {
			startIdx = mid + 1;
		}
	}
	return -1;
};
console.log(findPeakElement([1, 2, 3, 4, 5]));
console.log(findPeakElement([1, 2, 3, 4, 5].reverse()));
console.log(findPeakElement([1, 2, 3, 4, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([1, 2, 3, 1]));
