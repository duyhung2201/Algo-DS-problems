function solution1(A) {
	// Add your solution here
	let rows = [];

	A.forEach((height) => {
		let placedInRow = false;
		for (let i = 0; i < rows.length; i++) {
			if (height < rows[i]) {
				rows[i] = height;
				placedInRow = true;
				break;
			}
		}
		if (!placedInRow) {
			rows.push(height);
		}
	});
	return rows.length;
}

function solution2(A) {
	// Your solution goes here.
	const totalSum = A.reduce((acc, curr) => acc + curr, 0);
	let memo = new Map();

	function assignElement(index, accumulatedSum) {
		if (index == A.length) {
			return Math.abs(totalSum - 2 * accumulatedSum);
		}
		const key = `${index}-${accumulatedSum}`;
		if (memo.has(key)) return memo[key];
		let res1 = assignElement(index + 1, accumulatedSum + A[index]);
		let res2 = assignElement(index + 1, accumulatedSum);
		const res = Math.min(res1, res2);
		memo.set(key, res);

		return res;
	}

	let res = assignElement(0, 0);

	console.error(
		'Tip: Use console.error() to write debug messages on the output tab.'
	);
	return res;
}

// Read from stdin, solve the problem, and write the answer to stdout.
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

rl.on('line', function (line) {
	const A = line.split(',').map(Number);

	process.stdout.write(solution2(A).toString());
});
