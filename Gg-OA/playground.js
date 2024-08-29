function solution(A) {
	console.error(
		'Tip: Use console.error() to write debug messages on the output tab.'
	);

	const n = A.length;
	let maxNum = 0;

	for (let i = 0; i < n - 2; i++) {
		maxNum = Math.max(maxNum, A[i]);

		for (let j = i + 1; j < n - 1; j++) {
			const twoDigitNum = A[i] * 10 + A[j];
			maxNum = Math.max(maxNum, twoDigitNum);

			for (let k = j + 1; k < n; k++) {
				const threeDigitNum = A[i] * 100 + A[j] * 10 + A[k];
				maxNum = Math.max(maxNum, threeDigitNum);
			}
		}
	}

	return maxNum;
}

// console.log(solution([7, 2, 3, 3, 4, 9]));
// console.log(solution([0, 0, 5, 7]));
// console.log(solution([1, 2, 3]));
// console.log(solution([0, 1, 2]));
// console.log(solution([1, 1, 1, 4]));
// console.log(solution([4, 3, 8, 7, 2, 9, 6, 5, 1]));

// module.exports = solution;

function solution1(A) {
	if (!A.length) return 0; //if A empty

	let moves = A[0];

	for (let i = 1; i < A.length; i++) {
		// the difference is the min #moves to achieve A[i]
		if (A[i] > A[i - 1]) moves += A[i] - A[i - 1];
	}

	return moves;
}
// [2, 1, 3]
// [2, 2, 0, 0, 1]
// [5, 4, 2, 4, 1]
console.log(solution1([4, 3, 8]));
console.log(solution1([2, 1, 3]));
console.log(solution1([2, 2, 0, 0, 1]));
console.log(solution1([5, 4, 2, 4, 1]));
