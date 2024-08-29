/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
	let basket = new Map();
	let left = 0;
	let maxFruit = 0;

	for (let right = 0; right < fruits.length; right++) {
		let fruit = fruits[right];
		basket.set(fruit, (basket.get(fruit) || 0) + 1);

		while (basket.size > 2) {
			let fruitLeft = fruits[left];
			left++;
			let fruitLeftCount = basket.get(fruitLeft) - 1;
			if (fruitLeftCount) basket.set(fruitLeft, fruitLeftCount);
			else basket.delete(fruitLeft);
		}
		maxFruit = Math.max(maxFruit, right - left + 1);
	}
	return maxFruit;
};
console.log(totalFruit([1, 2, 1]));
// console.log(totalFruit([3, 3, 3, 1, 2, 1]));
