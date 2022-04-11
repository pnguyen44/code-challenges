// 706. Design HashMap
// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// - MyHashMap() initializes the object with an empty map.
// - void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// - int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// - void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

var MyHashMap = function () {
  this.hash = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.hash[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const val = this.hash[key];
  return val === undefined ? -1 : val;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.hash[key];
};

var obj = new MyHashMap();
obj.put(1, "a");
console.log(obj.get(1)); // "a"
obj.remove(1);
console.log(obj.get(1)); // -1
