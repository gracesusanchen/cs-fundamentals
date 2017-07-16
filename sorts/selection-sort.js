// n^2 complexity
// y I implement this?

const sampleArray = [5, 123, 123, 234, 87, 50000, 8, 394, 66, 88, 4, 1, 0, -1];

function swap(i, j, array) {
  const original = array[i];
  array[i] = array[j];
  array[j] = original;
}

function selectionSort(input) {
  for (let i = 0; i < input.length; i++) {
    const selectedElement = input[i];
    for (let j = i + 1; j < input.length; j++) {
      if (selectedElement > input[j]) {
        swap(i, j, input);
      }
    }
  }
  return input;
}

console.log(selectionSort(sampleArray));
