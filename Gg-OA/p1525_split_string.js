/**
 * @param {string} s
 * @return {number}
 */

const countUnique = (str) => {
	let map = {};
	str.split('').forEach((c) => (map[c] = true));
	return Object.keys(map).length;
};

var numSplits = function (s) {
	const len = s.length;
	if (len <= 1) return 0;
	if (len == 2) return 1;

	let leftIdx = 1;
	let rightIdx = len - 1;

	while (leftIdx <= rightIdx) {
		const sLeft = s.slice(0, leftIdx);
		const sRight = s.slice(leftIdx);
		if (countUnique(sLeft) === countUnique(sRight)) break;
		else leftIdx++;
	}

	while (rightIdx >= leftIdx) {
		const sLeft = s.slice(0, rightIdx);
		const sRight = s.slice(rightIdx);
		if (countUnique(sLeft) === countUnique(sRight)) break;
		else rightIdx--;
	}

	return rightIdx - leftIdx + 1;
};

var numSplitsOptimized = function (s) {
	const len = s.length;
	let uniqueCountLeft = new Array(len).fill(0);
	let uniqueCountRight = new Array(len).fill(0);
	let leftSet = new Set();
	let rightSet = new Set();

	for (let i = 0; i < len; i++) {
		leftSet.add(s[i]);
		uniqueCountLeft[i] = leftSet.size;

		rightSet.add(s[len - 1 - i]);
		uniqueCountRight[len - 1 - i] = rightSet.size;
	}

	let leftIdx = 1;
	let rightIdx = len - 1;

	while (leftIdx <= rightIdx) {
		let [t1, t2] = [uniqueCountLeft[leftIdx - 1], uniqueCountRight[leftIdx]];
		if (t1 === t2) break;
		else leftIdx++;
	}

	while (rightIdx >= leftIdx) {
		let [t1, t2] = [uniqueCountLeft[rightIdx - 1], uniqueCountRight[rightIdx]];
		if (t1 === t2) break;
		else rightIdx--;
	}

	return rightIdx - leftIdx +1;
};

console.log(numSplitsOptimized('aacaba'));
console.log(numSplitsOptimized('abcd'));
console.log(numSplitsOptimized('abdacaddbddab'));
console.log(numSplitsOptimized('abdaccaddbddab'));
