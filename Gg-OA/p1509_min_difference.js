/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
	const len = nums.length;
	if (len <= 4) return 0;
	const sortedNums = nums.sort((a, b) => a - b);

	const res1 = sortedNums[len - 1] - sortedNums[3];
	const res2 = sortedNums[len - 2] - sortedNums[2];
	const res3 = sortedNums[len - 3] - sortedNums[1];
	const res4 = sortedNums[len - 4] - sortedNums[0];

	return Math.min(res1, res2, res3, res4);
};

var minDifferenceOpt = function (nums) {
    const len = nums.length;
    if (len <= 4) return 0;

    // Helper function to maintain a min-heap of size k
    const minHeap = (arr, k) => {
        const heap = [];
        for (let num of arr) {
            if (heap.length < k) {
                heap.push(num);
                heap.sort((a, b) => a - b);
            } else if (num > heap[0]) {
                heap[0] = num;
                heap.sort((a, b) => a - b);
            }
        }
        return heap;
    };

    // Helper function to maintain a max-heap of size k
    const maxHeap = (arr, k) => {
        const heap = [];
        for (let num of arr) {
            if (heap.length < k) {
                heap.push(num);
                heap.sort((a, b) => b - a);
            } else if (num < heap[0]) {
                heap[0] = num;
                heap.sort((a, b) => b - a);
            }
        }
        return heap;
    };

    const largest = minHeap(nums, 4);
    const smallest = maxHeap(nums, 4);

    const res1 = largest[3] - smallest[0];
    const res2 = largest[2] - smallest[1];
    const res3 = largest[1] - smallest[2];
    const res4 = largest[0] - smallest[3];

    return Math.min(res1, res2, res3, res4);
};

console.log(minDifferenceOpt([5, 3, 2, 4]));
console.log(minDifferenceOpt([1, 5, 0, 10, 14]));
console.log(minDifferenceOpt([3, 100, 20]));
