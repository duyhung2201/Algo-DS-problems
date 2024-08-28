/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	const len = s.length;

	if (len < 2) return false;

	for (let i = 1; i <= Math.ceil(len / 2); i++) {
		if (len % i !== 0) continue;
		if (s.slice(0, i).repeat(len / i) === s) {
			return true;
		}
	}
	return false;
};

var repeatedSubstringPatternOpt = function (s) {
	const double = s + s;
	return double.slice(1, -1).includes(s);
};

console.log(repeatedSubstringPatternOpt('abaababaab'));
console.log(repeatedSubstringPatternOpt('a'));
console.log(repeatedSubstringPatternOpt('abab'));
console.log(repeatedSubstringPatternOpt('abcabcabcabcabc'));
console.log(repeatedSubstringPatternOpt('abcabcabcddabcdabc'));
