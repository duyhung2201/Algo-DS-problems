const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(array, i, j) {
	if (i == j) return;
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function bubbleSort(array) {
	//Code here
	for (let i = array.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[i]) swap(array, i, j);
		}
	}
}

function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let min = array[i];
		let minIdx = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < min) {
				min = array[j];
				minIdx = j;
			}
			swap(array, i, minIdx);
		}
	}
}

function insertionSort(array) {
	if (array.length < 2) return;
	for (let i = 1; i < array.length; i++) {
		for (let j = i - 1; j > 0; j--) {
			if (array[j - 1] <= array[i] && array[i] < array[j])
				array.splice(j, 0, array.splice(i, 1)[0]);
		}
		if (array[0] > array[i]) array.unshift(array.splice(i, 1)[0]);
	}
}

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}
	// Split Array in into right and left
	const splitIdx = Math.floor(array.length / 2);
	const [left, right] = [array.slice(0, splitIdx), array.slice(splitIdx)];

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let [leftIdx, rightIdx] = [0, 0];
	let res = [];

	while (leftIdx < left.length && rightIdx < right.length) {
		if (left[leftIdx] <= right[rightIdx]) {
			res.push(left[leftIdx]);
			leftIdx++;
		} else {
			res.push(right[rightIdx]);
			rightIdx++;
		}
	}

	return res.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

function quickSort(array, left, right) {
	let partitionIdx;

	if (left < right) partitionIdx = patrition(array, left, right, right);
	else return;

	quickSort(array, left, partitionIdx - 1);
	quickSort(array, partitionIdx + 1, right);

	return array;
}

function patrition(array, left, right, pivot) {
	let partitionIdx = left;
	const pivotValue = array[pivot];

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIdx);
			partitionIdx++;
		}
	}
	swap(array, partitionIdx, pivot);
	return partitionIdx;
}

const answer = quickSort(numbers, 0, numbers.length - 1);
console.log(answer);
