const PRIME = 3;
const ANOTHER_PRIME = 71;

function hashFunction(key) {
  const chars = key.split();
  return chars.reduce((sum, char) => {
    sum += ANOTHER_PRIME + (char.charCodeAt(0) * PRIME);
    return sum;
  }, 0);
}

// Hashtable is an array underneath the hood
// the idea is to have quite a big array, and store the object in the index
// which correspond to the object being hashed
class HashTable {
  constructor(size) {
    this.content = new Array(size);
    this.getIndexOf = this.getIndexOf.bind(this);
  }

  getIndexOf(arrayLength, key) {
    return hashFunction(key) % this.content.length;
  }

  search(key) {
    const index = this.getIndexOf(key);
    return this.content[index];
  }

  insert(key, value) {
    const index = this.getIndexOf(key);
    if (!this.content[index]) {
      this.content[index] = value;
    } else {
      // open addressing
    }
  }

  delete(key) {
    const index = this.getIndexOf(key);
    delete this.content[index];
  }
}

module.exports = HashTable;
