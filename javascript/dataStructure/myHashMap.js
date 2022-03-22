// 706. Design HashMap
// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// - MyHashMap() initializes the object with an empty map.
// - void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// - int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// - void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

var MyHashMap = function () {
  this.data = new Array(1000001)
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value
};

/**
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function (key) {
  value = this.data[key]
  return value !== undefined ? value : -1
};

/**
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function (key) {
  delete this.data[key]
};


myHashMap = new MyHashMap();
myHashMap.put(1, 1);
myHashMap.put(2, 2);
myHashMap.printHashMap(); // The map is now [[1,1], [2,2]]
console.log(myHashMap.get(1)); // return 1, The map is now [[1,1], [2,2]]
console.log(myHashMap.get(3)); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1);
myHashMap.printHashMap(); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
console.log(myHashMap.get(2)); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2
myHashMap.printHashMap() // The map is now [[1,1]]
console.log(myHashMap.get(2)); // return -1 (i.e., not found), The map is now [[1,1]]
