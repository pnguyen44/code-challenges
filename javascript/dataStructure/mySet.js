// Implement a set data structure with a has, values, add, remove, size, union, intersection, difference, and subset methods. The set data structure has no duplicate items and the values are not in any particular order. It is commonly used to check
// for the presence of an item.

class MySet {
  constructor() {
    this._collection = [];
  }
  // checks for the presence of an element and true or false
  has(element) {
    return this._collection.indexOf(element) > -1;
  }
  // Return all the values in the set
  values() {
    return this._collection;
  }
  // Adds an element to the set. Returns true if the element has been added to the collection otherwise return false
  add(element) {
    if (!this.has(element)) {
      this._collection.push(element);
      return true;
    }
    return false;
  }
  // Removes an element to the set. Returns true if the element has been removed from to the collection otherwise return false
  remove(element) {
    const index = this._collection.indexOf(element);
    if (index > -1) {
      this._collection.splice(index, 1);
      return true;
    }

    return false;
  }
  // Returns the size of the collection.
  size() {
    return this._collection.length;
  }
  // Returns the union of two sets. It will combine the sets but leave out any duplicates in the combination of the sets
  union(otherSet) {
    const unionSet = new MySet();

    this.values().forEach((e) => unionSet.add(e));

    otherSet.values().forEach((e) => {
      if (!this.has(e)) {
        unionSet.add(e);
      }
    });

    return unionSet;
  }
  // Returns the intersection of two sets as a new set. The intersection is all the items that are in both sets.
  intersection(otherSet) {
    const intersectionSet = new MySet();

    this.values().forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  }
  // Returns the difference of two sets as a new set.
  difference(otherSet) {
    const differenceSet = new MySet();

    this.values().forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  }
  // Test if the set is a subset of a different set. If the first set is completely contained within the second set, return true otherwise return false.
  subset(otherSet) {
    return this.values().every((e) => otherSet.has(e));
  }
}

var setA = new MySet();
var setB = new MySet();
setA.add("a");
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.has("a")); // true
console.log(setB.has("e")); // false
console.log(setB.values()); // ["b", "c", "a", "d"]
console.log(setA.size()); // 1
console.log(setA.union(setB).values()); // ["a", "b", "c", "d"]
console.log(setA.intersection(setB).values()); // ["a"]
console.log(setB.difference(setA).values()); // ["b","c","d"]
console.log(setA.subset(setB)); // true
console.log(setB.subset(setA)); // false
setB.remove("a");
console.log(setB.values()); // ["b", "c", "d"]
