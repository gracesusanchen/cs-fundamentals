const array = [5, 123, 123, 234, 87, 50000, 8, 394, 66, 88, 4, 1, 0, -1];

// Keep picking a pivot point and moving items bigger than the pivot on to the left
// smaller than the pivot onto the right.

function swap(input, first, second) {
  const temp = input[first];
  input[first] = input[second];
  input[second] = temp;
}

// The partion function basically picks a pivot value
// The passes through the array, sorting the array into 3 parts like so:
//  elements less than pivot | pivot placeholder | elements larger than the pivot
// What we will need is to always keep track of where the partition placeholder (or wall) is.
function partition(input, left, right) {
  // this pivot element should ideally have a value
  // pretty close to the median so the algo runs in ideal time
  const pivotValue = input[right];
  let wall = left;

  for (let i = left; i < right; i++) {
    const currentValue = input[i];
    if (currentValue < pivotValue) {
      // place on left of the wall
      swap(input, i, wall);
      wall++;
    }
  }

  // After we passed through all of them, place pivot at the position of wall
  swap(input, wall, right);
  // now we have the first part of the array (left~pivot) all smaller than pivot
  // second part of arra are all larger than the pivot
  // return pivot index to do this recurisvely
  console.log(left, right, wall);
  return wall;
}

function quickSort(input, left, right) {
  if ((right - left) <= 2) {
    return;
  }
  const pivot = partition(input, left, right);

  quickSort(input, left, pivot - 1);
  quickSort(input, pivot + 1, right);

  // input will be sorted in place
  return input;
}

console.log(quickSort(array, 0, array.length - 1));
