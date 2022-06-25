"use strict";

class HashTable {
  constructor(limit) {
    this.table = new Array(limit);
  }

  _hash(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);

    if (this.table[index] === undefined) {
      this.table[index] = [[key, value]];
      return;
    }

    // Check if hash table has key and if it does then update its value
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] === value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const arr = this.table[index];

    if (arr === undefined) {
      return null;
    }

    for (const [k, v] of arr) {
      if (k === key) {
        return v;
      }
    }
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] === undefined) {
      return false;
    }

    for (let i = 0; i < this.table[index].length; i++) {
      const curr = this.table[index][i];
      if (curr[0] === key) {
        this.table[index].splice(i, 1);
        return true;
      }
    }

    return false;
  }

  print() {
    console.log(this.table);
  }
}

let ht = new HashTable(10);
console.log(ht._hash("quincy")); // 5
ht.set("beau", "person");
ht.set("fido", "dog");
ht.set("rex", "dinosour");
ht.set("rex", "test");
ht.set("spain", "1");
ht.set("ǻ", "10");
ht.set("tux", "penguin");
console.log(ht.get("tux")); // penguin
ht.print();
ht.remove("rex");
console.log(ht.get("rex")); // undefined
console.log(ht.remove("rex")); // false
