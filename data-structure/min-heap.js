function swap(i, j, array) {
  const original = array[i];
  array[i] = array[j];
  array[j] = original;
}

function heapifyUp(array, start) {
  const parent = Math.floor((start - 1) / 2);

  let child = array[start];
  if (array[parent] && child < array[parent]) {
    swap(start, parent, array);
    heapifyUp(array, parent);
  }
}

function heapifyDown(array, start) {
  // the indices of the two children of the `start` node
  const leftIndex = (start * 2) + 1;
  const rightIndex = (start * 2) + 2;

  let minimum = array[start];
  let minIndex = start;
  if (array[leftIndex] && minimum > array[leftIndex]) {
    minimum = array[leftIndex];
    minIndex = leftIndex;
  }
  if (array[rightIndex] && minimum > array[rightIndex]) {
    minimum = array[rightIndex];
    minIndex = rightIndex;
  }

  if (minIndex !== start) {
    swap(start, minIndex, array);
    // if swap happened, move down the tree
    heapifyDown(array, minIndex);
  }
}

// First pass through array to make it into min-heap
function minHeapify(array) {
  let startIndex = Math.floor(array.length / 2);
  while (startIndex >= 0) {
    heapifyDown(array, startIndex);
    startIndex--;
  }
}

class MinHeap {
  constructor(nodes) {
    this.nodes = nodes;
    minHeapify(this.nodes);
  }

  size() {
    return this.nodes.length;
  }

  insert(element) {
    // put node onto the top of heap
    this.nodes.push(element);
    heapifyUp(this.nodes, this.nodes.length - 1);
  }

  deleteMin() {
    if (this.nodes.length === 0) {
      return false;
    }
    const currentMin = this.nodes.shift();

    // when deleting min, replace deleted node with last node
    const lastElement = this.nodes.pop();
    if (lastElement)  this.nodes.unshift(lastElement);
    heapifyDown(this.nodes, 0);

    return currentMin;
  }
}

module.exports = MinHeap;
