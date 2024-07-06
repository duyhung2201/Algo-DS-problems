class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(index, value) {
		if (index >= this.length) return this.append(value);
		if (index < 0) return;
		if ((index = 0)) return this.prepend(value);
		const newNode = new Node(value);
		let leader = this.traverseToIndex(index - 1);
		newNode.next = leader.next;
		leader.next = newNode;
		this.length++;
		return this;
	}

	remove(index) {
		if (index >= this.length || index < 0) return;
		if (index == 0) this.head = this.head.next;

		let leader = this.traverseToIndex(index - 1);
		leader.next = leader.next.next;
		this.length--;
	}

	traverseToIndex(index) {
		let p = this.head;
		for (let i = 0; i < index; i++) {
			p = p.next;
		}
		return p;
	}

	printList() {
		const arr = [];
		let p = this.head;
		while (p != null) {
			arr.push(p.value);
			p = p.next;
		}
		console.log(arr);
		return arr;
	}

	reverse() {
		let p = this.head;
		this.tail = this.head;
		this.head = null;
		while (p != null) {
			const follower = p.next;
			p.next = this.head;
			this.head = p;
			p = follower;
		}
	}
}

let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(1, 88);

// myLinkedList.printList();

// myLinkedList.remove(2);
// myLinkedList.printList();

myLinkedList.reverse();
myLinkedList.printList();
