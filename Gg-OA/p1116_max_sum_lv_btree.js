var maxLevelSum = function (root) {
	if (!root) return 0;
	let queue = [root];
	let sums = [];

	while (queue.length) {
		let level = [];
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			let node = queue.shift();
			level.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		sums.push(level.reduce((acc, curr) => acc + curr));
	}

	return sums.indexOf(Math.max(...sums)) + 1;
};

var maxLevelSumDFS = function (root) {
	const levelSums = {};

	function dfs(node, level) {
		if (!node) return;

		if (level in levelSums) {
			levelSums[level] += node.val;
		} else {
			levelSums[level] = node.val;
		}

		// Recursively process left and right subtrees, increasing the level by 1
		dfs(node.left, level + 1);
		dfs(node.right, level + 1);
	}

	dfs(root, 1);

	let maxSum = -Infinity;
	let smallestLevel = Infinity;

	for (let level in levelSums) {
		if (
			levelSums[level] > maxSum ||
			(levelSums[level] === maxSum && parseInt(level) < smallestLevel)
		) {
			maxSum = levelSums[level];
			smallestLevel = parseInt(level);
		}
	}

	return smallestLevel;
};

const root = {
	val: 1,
	left: { val: 2, left: null, right: null },
	right: {
		val: 3,
		left: { val: 4, left: null, right: null },
		right: { val: 5, left: null, right: null },
	},
};

console.log(maxLevelSum(root));
