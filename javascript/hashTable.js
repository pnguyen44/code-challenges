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
    this.storage = {}
    this.storageLimit = 4
  }
  print() {
    console.log(this.storage)
  }
  add(key, value) {
    const index = hash(key, this.storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [key, value]
    } else {
      let added = false
      for(let i = 0; i < this.storage[index].length; i++){
        if (this.storage[index][i][0]) === key {
          this.storage[index][i][1] = value
          added = true
        }
      }
      if(added === false) {
        storage[index].push(key,value)
      }
    }
  }

  remove(key) {
    const index = hash(key, this.storageLimit)
    if(this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete storage[index]
    } else {
      for(let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i]
        }
      }
    }
  }

}
