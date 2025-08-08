// 代码生成时间: 2025-08-08 17:05:12
 * Compare two numbers and return a value indicating their relative order.
 *
 * @param {number} a - The first number to compare.
 * @param {number} b - The second number to compare.
 * @returns {number} -1 if a < b, 0 if a == b, 1 if a > b.
 */
function compareNumbers(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * Perform a simple bubble sort on an array of numbers.
 *
 * @param {Array} arr - The array of numbers to sort.
 * @returns {Array} - The sorted array.
 */
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array as input for bubbleSort.");
  }

  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (compareNumbers(arr[j], arr[j + 1]) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/**
 * Perform an insertion sort on an array of numbers.
 *
 * @param {Array} arr - The array of numbers to sort.
 * @returns {Array} - The sorted array.
 */
function insertionSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array as input for insertionSort.");
  }

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && compareNumbers(arr[j], currentVal) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

/**
 * Perform a quick sort on an array of numbers.
 *
 * @param {Array} arr - The array of numbers to sort.
 * @returns {Array} - The sorted array.
 */
function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array as input for quickSort.");
  }

  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivotValue = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (compareNumbers(arr[i], pivotValue) < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)];
}

// Example usage of the sorting functions:
try {
  const numbers = [5, 3, 8, 4, 2];
  console.log("Bubble Sort:", bubbleSort([...numbers]));
  console.log("Insertion Sort:", insertionSort([...numbers]));
  console.log("Quick Sort:", quickSort([...numbers]));
} catch (error) {
  console.error(error.message);
}
