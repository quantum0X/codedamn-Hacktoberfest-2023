# Add & Sort

## Problem Statement

Max was learning JavaScript, he attempted to create a one-liner function that would add a number to a given array and return the sorted array eliminating the need to do this continuously when required. However, he seems to have hit a roadblock with the code he was written, it isn't performing as expected.

Can you help him about by debugging his code? Try and understand the root cause of the problem and update the function logic.

**Code:**
```js
/**
 * The functions returns a sorted array after adding the new element
 * @param {number[]} array
 * @param {number} element
 * @returns {number[]}
 */
export function addAndSort(array, element) {
	return array.push(element).sort();
}

// Sample Test Cases
console.log(addAndSort([5, 7, 1, 6], 3)); // Expected Output: [1, 3, 5, 6, 7]
console.log(addAndSort([15, 7, 2, 26], 10)); // Expected Output: [2, 7, 10, 15, 26]
console.log(addAndSort([25, 27, 21, 16], 19)); // Expected Output: [16, 19, 21, 25, 27]

```

## Challenges
`addAndSort()` function works as expected