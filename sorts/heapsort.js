const MaxHeap = require('../data-structure/max-heap');

// Given an array, we can heapify (max heap)
// so that it is sorted with a heap.

const array = [5, 123, 123, 234, 87, 50000, 8, 394, 66, 88, 4, 1, 0, -1];
const heap = new MaxHeap(array);

heap.initialize();

while (heap.content.length > 0) {
  console.log(heap.deleteMax());
}
