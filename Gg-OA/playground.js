function minDaysBloom(roses, k, n) {
	const isEnoughBouquets = (day) => {
		let adjacent = 0,
			bouquets = 0;

		for (const rose of roses) {
			if (rose <= day) {
				adjacent++;
			} else {
				adjacent = 0;
			}
			if (adjacent === k) {
				bouquets++;
				adjacent = 0;
			}
			if (bouquets == n) return true;
		}
		return false;
	};

	let left = Math.min(...roses),
		right = Math.max(...roses);

	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (isEnoughBouquets(mid)) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return right;
}

// Input: roses = [1, 2, 4, 9, 3, 4, 1], k = 2, n = 2
// Output: 4
const roses = [1, 2, 4, 9, 3, 4, 1];
const k = 2;
const n = 2;

console.log(minDaysBloom(roses, k, n));
console.log(minDaysBloom([1], 1, 1));

console.log(minDaysBloom([5, 5, 5, 5, 5], 2, 2));

console.log(minDaysBloom([1, 2, 3, 4, 5], 2, 3));

console.log(minDaysBloom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3));

console.log(minDaysBloom([1, 1, 1, 1, 1], 2, 2));

console.log(minDaysBloom([1, 10, 20, 30, 40], 4, 1));

console.log(minDaysBloom([1, 100, 100, 100, 100], 2, 1));

console.log(minDaysBloom([1, 2, 2, 2, 2], 4, 1));

console.log(minDaysBloom([5, 4, 3, 2, 1], 2, 2));

console.log(minDaysBloom([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9], 2, 3));
