const array = [5, 123, 123, 234, 87, 50000, 8, 394, 66, 88, 4, 1, 0, -1];

function split(input) {
  // Split the input into smaller arrays, then merge them back
  const splitIndex = Math.floor(input.length / 2);
  return [input.slice(0, splitIndex), input.slice(splitIndex)];
}

function merge(first, second) {
  // Assume they are sorted from large to small
  let result = [];
  while (first.length !== 0 && second.length !== 0) {
    const firstElement = first[0];
    const secondElement = second[0];
    if (firstElement > secondElement) {
      result.push(firstElement);
      first.shift();
    } else if (firstElement < secondElement) {
      result.push(secondElement);
      second.shift();
    } else {
      // equal elements
      result.push(firstElement);
      first.shift();
      result.push(secondElement);
      second.shift();
    }
  }

  if (first.length !== 0) {
    result = result.concat(first);
  }
  if (second.length !== 0) {
    result = result.concat(second);
  }
  return result;
}

function mergeSort(input) {
  if (!input) {
    return [];
  }
  if (input.length <= 1) {
    return input;
  }
  const splitArray = split(input);

  const firstResult = mergeSort(splitArray[0]);
  const secondResult = mergeSort(splitArray[1]);

  return merge(firstResult, secondResult);
}

console.log(mergeSort(array));
