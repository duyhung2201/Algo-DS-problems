/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {};
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
	let res = time.split('');
	for (let i = 0; i < time.length; i++) {
		if (res[i] !== '?') continue;
		if (i === 0) {
			res[i] = res[1] === '?' || Number(res[1]) < 4 ? '2' : '1';
		} else if (i === 1) {
			res[i] = res[0] === '2' ? '3' : '9';
		} else if (i === 3) res[i] = '5';
		else if (i === 4) res[i] = '9';
	}
	return res.join('');
};

console.log('?' < '4');

t = '2?:5?';
t[0] = '3';
console.log(t[0]);

console.log('2?:5?'[0] !== '?');

console.log(maximumTime('2?:5?'));
console.log(maximumTime('1?:?0'));
console.log(maximumTime('?0:?9'));
