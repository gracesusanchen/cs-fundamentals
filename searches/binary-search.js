// Given a sorted array, we can locate the element we want in O(log n) by
// dividing the array into two parts and picking the relevant part

const array = [-1, 0, 1, 2, 3, 4, 5, 5, 8, 66, 87, 88,
  123, 123, 123, 123, 123, 123, 123, 123, 234, 234, 234,
  394, 1000, 7350, 9871, 50000, 1500000];
const testValue = 123;

function binarySearch(input, target, left, right) {
  if (right < left) {
    // target was not found
    return -1;
  }

  // the target is in this part of the array
  const division = Math.floor((right + left) / 2);
  //console.log(division, ':', input[division]);
  if (input[division] === target) {
    return division;
  } else if (input[division] > target) {
    return binarySearch(input, target, left, division - 1);
  }
  // array[division] < target
  return binarySearch(input, target, division + 1, right);
}

console.log(`Test value ${testValue} exists at index ${binarySearch(array, 123, 0, array.length - 1)}`);


// One thing we could also do is to use this to find no. of repeated
// instance in an array, by slightly modifying the termination (or target found condition)

function leftBoundarySearch(input, target, left, right) {
  if (right < left) {
    // lower bound is found
    return left;
  }

  // the target is in this part of the array
  const division = Math.floor((right + left) / 2);
  if (input[division] >= target) {
    return leftBoundarySearch(input, target, left, division - 1);
  }
  return leftBoundarySearch(input, target, division + 1, right);
}

function rightBoundarySearch(input, target, left, right) {
  if (right < left) {
    // upper bound is not found
    return right;
  }

  // the target is in this part of the array
  const division = Math.floor((right + left) / 2);
  if (input[division] <= target) {
    return rightBoundarySearch(input, target, division + 1, right);
  }
  return rightBoundarySearch(input, target, left, division - 1);
}

console.log(`Duplicate value ${testValue} exists between index:
  ${leftBoundarySearch(array, testValue, 0, array.length - 1)} and
  ${rightBoundarySearch(array, 123, 0, array.length - 1)}`);
