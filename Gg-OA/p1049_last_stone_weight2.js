/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
	let memo = new Map();

	const assignSign = (idx, accum) => {
		if (idx === stones.length) return Math.abs(accum);
		const key = `${idx}-${accum}`;
		if (memo.has(key)) return memo.get(key);

		const res1 = assignSign(idx + 1, accum + stones[idx]);
		const res2 = assignSign(idx + 1, accum - stones[idx]);
		const res = Math.min(res1, res2);
		memo.set(key, res);

		return res;
	};

	return assignSign(0, 0);
};

console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeightII([31, 26, 33, 21, 40]));


