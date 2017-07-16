// think of the left portion of the array as sorted, this sorted portion
// starts off with 1 element in it.
// go over the remaining array and insert them in the right order in the
// sorted portion of the list - to the right of the first element smaller than the
// element we're trying to insert.

const sampleArray = [5, 123, 123, 234, 87, 50000, 8, 394, 66, 88, 4, 1, 0, -1];

function swap(i, j, array) {
  const original = array[i];
  array[i] = array[j];
  array[j] = original;
}

function insertionSort(input) {
  for (let i = 1; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (input[j] < input[i]) {
        // NOTE: index j is always smaller than i
        // insert i just in front of j
        input.splice(j, 0, input[i]);
        // remove the dupicate i from the array
        input.splice(i, 1);
      } else {
        break;
      }
    }
  }
  return input;
}


// See this post if confused about why different from selection sort
// https://stackoverflow.com/a/15799689/3868886
function insertionSortWithSwap(input) {
  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      // If we do cannot copy the array etc, can use swaps to complete
      // the sort, making it visually very similar to selection sort.
      if (input[j] > input[i]) {
        swap(i, j, input);
      } else {
        break;
      }
    }
  }
  return input;
}

console.log(insertionSort(sampleArray));

module.exports = insertionSort;
