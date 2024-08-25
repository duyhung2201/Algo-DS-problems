// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
	if (number == 2) return 2;
	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
	//code here
	let answer = 1;
	for (let i = 2; i <= number; i++) {
		answer *= i;
	}

	return answer;
}

function fibonacciIterativeRecursive(n) {
	if (n < 2) return n;

	return (
		fibonacciIterativeRecursive(n - 1) + fibonacciIterativeRecursive(n - 2)
	);
}

function fibonacciIterative(n) {
	if (n < 2) return n;
	let [f1, f2] = [1, 0];

	for (let i = 3; i <= n; i++) {
		let temp = f1;
		f1 += f2;
		f2 = temp;
	}

	return f1;
}

function reverseString(str) {
	let res = '';

	for (let i = str.length - 1; i >= 0; i--) {
		res += str[i];
	}

	return res;
}

console.log(reverseString('yoyo master'));

function reverseStringRecursive(str) {
	let len = str.length;
	if (len <= 1) return str;

	return str.slice(-1) + reverseStringRecursive(str.slice(1, len - 1)) + str[0];
}

console.log(reverseStringRecursive('yoyo master'));
