// reduce(): This method applies a provided function to each element of the array, 
// resulting in a single output value. 
// It is commonly used for aggregating or summarizing data from an array.

// 1.Find the maximum value in an array

const numbers = [10, 2, 30, 4, 50];
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, 0);

console.log(max);    // Output: 50



// 2.Count the number of occurrences of each element in an array

const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
const counts = fruits.reduce((accumulator, currentValue) => {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(counts); // Output: { apple: 2, banana: 2, orange: 1 }



// 3.Flatten Array of Arrays 

const arrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]



// 4. Sum up an array of numbers:

const num = [1, 2, 3, 4, 5];
const sum = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15