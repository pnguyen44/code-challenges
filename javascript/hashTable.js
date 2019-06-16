'use strict'
const hash = (str, max) => {
  const hash = 0
  for (let i = 0; i < str.length; i++) {
    hash += str.charCcodeAt(i)
  }
  return hash % max
}

class HashTable {
  constructor() {
    this.storage = []
    this.storageLimit = 4
  }
  print() {
    console.log(this.storage)
  }
  
}
