class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	set(key, val) {
		let address = this._hash(key);
		if (!this.data[address]) this.data[address] = [[key, val]];
		else this.data[address].push([key, val]);
	}

	get(key) {
		let address = this._hash(key);
		let val;
		this.data[address].forEach((item) => {
			if (item[0] == key) val = item[1];
		});
		return val;
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
}

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// console.log(myHashTable.get("grapes"));
// myHashTable.set("apples", 9);
// console.log(myHashTable.get("apples"));
// myHashTable.set("oranges", 2);
// console.log(myHashTable.get("oranges"));

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

let array = [2,1,1,2,3,5,1,2,4];

function firstRecurringCharacter(input) {
	let ht = {};
	for (const item of input) {
		if (ht[item]) return item;
		else ht[item] = true;
	}
}
console.log(firstRecurringCharacter(array));

