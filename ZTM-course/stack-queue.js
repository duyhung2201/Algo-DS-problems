class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const node = new Node(value);
		node.next = this.top;
		this.top = node;
		if (!this.length) this.bottom = node;
		this.length++;

		return this;
	}

	pop() {
		if (!this.top) return;
		const res = this.top;
		this.top = this.top.next;
		this.length--;
		if (!this.length) this.bottom = null;

		return res;
	}

	isEmpty() {
		return !!this.length;
	}
}

class StackArr {
	constructor() {
		this.array = [];
	}

	peek() {
		return this.array[this.array.length - 1] || null;
	}

	push(value) {
		this.array.push(value);

		return this;
	}

	pop() {
		this.array.pop();
	}

	isEmpty() {
		return !!this.array.length;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value) {
		const node = new Node(value);
		if (!this.length) {
			this.first = node;
		} else {
			this.last.next = node;
		}
		this.last = node;
		this.length++;
		return this;
	}
	dequeue() {
		if (!this.length) return;
		if (this.length == 1) this.last = null;

		const res = this.first;
		this.first = this.first.next;
		this.length--;

		return res;
	}
	isEmpty() {
		return !this.length;
	}
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());
console.log(myQueue.peek());

// const myStack = new StackArr();
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("discord");
// console.log(myStack);
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);
// console.log(myStack.peek());


class QueueStack {
	constructor() {
		
	}
}