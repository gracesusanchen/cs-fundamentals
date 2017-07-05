function swap(i, j, array) {
  const original = array[i];
  array[i] = array[j];
  array[j] = original;
}

function maxHeapify(array, index) {
  const rightIndex = (index * 2) + 1;
  const leftIndex = (index * 2) + 2;

  let maxValue = array[index];
  let maxIndex;
  if (array[rightIndex] > maxValue) {
    maxValue = array[rightIndex];
    maxIndex = rightIndex;
  }
  if (array[leftIndex] > maxValue) {
    maxIndex = leftIndex;
  }
  if (maxIndex) {
    swap(maxIndex, index, array);
    maxHeapify(array, maxIndex);
  }
}

class MaxHeap {
  constructor(array) {
    this.content = array;
  }

  initialize() {
    // heapify the array
    // starting from the N/2 element, we move back to the root, heapifying all the subtrees
    let start = Math.floor(this.content.length / 2);
    // for zero based arrays!
    while (start >= 0) {
      maxHeapify(this.content, start);
      start--;
    }
  }

  insert(item) {
    this.content.unshift(item);
    maxHeapify(this.content, 0);
  }

  getMax() {
    return this.content[0];
  }

  deleteMax() {
    if (this.content.length === 1) {
      this.content = [];
      return this.content[0];
    }
    // delete the first item, replace with the last item, heapify down
    const max = this.content.shift();
    const lastElement = this.content.pop();
    this.content.unshift(lastElement);

    maxHeapify(this.content, 0);
    return max;
  }
}

module.exports = MaxHeap;
