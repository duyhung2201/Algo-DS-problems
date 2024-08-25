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

function assignElement(index, n, currSum1, currSum2, A) {
	if (index == n) {
		return Math.abs(currSum1 - currSum2);
	}
	let res1 = assignElement(index + 1, n, currSum1 + A[index], currSum2, A);
	let res2 = assignElement(index + 1, n, currSum1, currSum2 + A[index], A);
	return Math.min(res1, res2);
}

function solution2(A) {
	// Your solution goes here.
	let res = assignElement(0, A.length, 0, 0, A);

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
