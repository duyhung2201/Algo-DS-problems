/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function (text1, text2) {
	let memo = new Map();

	function lcs(p1, p2) {
		//have scanned through of either string
		if (p1 === text1.length || p2 === text2.length) {
			return 0;
		}
		let key = `${p1}-${p2}`;
		if (memo.has(key)) return memo.get(key);

		let result;
		if (text1[p1] === text2[p2]) result = 1 + lcs(p1 + 1, p2 + 1);
		else {
			result = Math.max(lcs(p1 + 1, p2), lcs(p1, p2 + 1));
		}
		memo.set(key, result);
		return result;
	}
	return lcs(0, 0);
};

var longestCommonSubsequence2 = function (text1, text2) {
	const m = text1.length,
		n = text2.length;

	let dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
			else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
		}
	}
	return dp[m][n];
};

console.log(longestCommonSubsequence2('abcbdab', 'bdcab'));
console.log(longestCommonSubsequence('a', 'b'));
console.log(longestCommonSubsequence('ace', 'b'));
console.log(longestCommonSubsequence('2564912', '12345'));
console.log(longestCommonSubsequence('a', 'A'));
console.log(longestCommonSubsequence('aaababaaa', 'wfafsabaaewwe'));
