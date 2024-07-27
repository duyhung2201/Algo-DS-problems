class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		let p = this.root;
		while (true) {
			if (value >= p.value) {
				if (p.right) p = p.right;
				else {
					p.right = newNode;
					return this;
				}
			} else {
				if (p.left) p = p.left;
				else {
					p.left = newNode;
					return this;
				}
			}
		}
	}
	lookup(value) {
		let p = this.root;
		while (p) {
			if (p.value == value) return p;
			p = value > p.value ? p.right : p.left;
		}
		return null;
	}

	remove(value) {
		let p = this.root;
		let parent = null;
		while (p) {
			if (value > p.value) {
				parent = p;
				p = p.right;
			} else if (value < p.value) {
				parent = p;
				p = p.left;
			} else if (p.value == value) {
				if (!p.right) {
					if (!parent) this.root = p.left;
					else if (value > parent.value) parent.right = p.left;
					else if (value < parent.value) parent.left = p.left;
				} else {
					let successor = p.right;
					let parentSuccessor = null;

					while (successor.left) {
						parentSuccessor = successor;
						successor = successor.left;
					}

					if (parentSuccessor) parentSuccessor.left = successor.right;
					else p.right = successor.right; // There aren't any left children of p.right

					successor.right = p.right;
					successor.left = p.left;

					if (!parent) this.root = successor;
					else if (value > parent.value) parent.right = successor;
					else if (value < parent.value) parent.left = successor;
				}
				return this;
			}
		}
	}
}

const tree = new BinarySearchTree();
const elements = [50, 24, 79, 64, 61, 75, 78, 82, 80, 81, 93, 96];

elements.forEach((e) => {
	tree.insert(e);
});
tree.remove(79)
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
