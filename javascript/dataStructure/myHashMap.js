// 706. Design HashMap
// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// - MyHashMap() initializes the object with an empty map.
// - void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// - int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// - void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

var MyHashMap = function () {
  this.table = new Array(10);
};

MyHashMap.prototype.hash = function (key) {
  let hash = 0;
  const str = String(key);

  for (const c of str) {
    hash += String(c).charCodeAt(0);
  }

  return hash % this.table.length;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = this.hash(key);

  if (this.table[index] === undefined || this.table[index].length === 0) {
    this.table[index] = [key, value];
  }

  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i][0] === key) {
      this.table[index][i][1] = value;
      return;
    }
  }

  this.table[index].push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = this.hash(key);

  if (this.table[index] === undefined || this.table[index].length === 0) {
    return -1;
  }

  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i][0] === key) {
      return this.table[index][i][1];
    }
  }

  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = this.hash(key);

  if (this.table[index] === undefined || this.table[index].length === 0) {
    return;
  }

  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i][0] === key) {
      this.table[index].splice(i, 1);
      return;
    }
  }
};

var obj = new MyHashMap();
obj.put(1, "a");
console.log(obj.get(1)); // "a"
obj.remove(1);
console.log(obj.get(1)); // -1
