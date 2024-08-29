/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
	let newS = s.split('-').join('').toUpperCase();
	let len = newS.length;
	let res = '';

	if (!len) return '';

	let firstGrpLen = len % k;
	if (firstGrpLen) res = newS.slice(0, firstGrpLen) + '-';
	for (let i = 0; i < Math.floor(len / k); i++) {
		const startIdx = firstGrpLen + i * k;
		res += newS.slice(startIdx, startIdx + k) + '-';
	}
	return res.slice(0, -1);
};

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
console.log(licenseKeyFormatting('5F3Z-2e-9-wf', 4));

// Input: s = "5F3Z-2e-9-w", k = 4
// Output: "5F3Z-2E9W"
