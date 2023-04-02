// forEach(): This method executes a provided function once for each array element. 
// It is commonly used for simple operations that need to be performed on each element of the array.

// 1. Using forEach() to iterate over a nested array:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
nestedArray.forEach((innerArray) => {
  innerArray.forEach((value) => {
    console.log(value); //outputs each value to the console.
  });
}); 


// 2.Using forEach() with a break statement:

const myArray = [1, 2, 3, 4, 5];
let found = false;
myArray.forEach((value) => {
  if (value === 3) {
    console.log('Found 3!');
    found = true;
    return;
  }
});
if (!found) {
  console.log('Could not find 3!');
}


// 3.Using forEach() with a this context:

const myObject = {
    data: [1, 2, 3, 4],
    iterate () {
      this.data.forEach(function(value) {
        console.log(value * this.multiplier);
      }, this);
    },
    multiplier: 2
  };
myObject.iterate();


  // 4.Looping over an array and modifying its values:
  
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
    array[index] = number * 2;
  });
console.log(numbers); // [2, 4, 6, 8, 10]


// 5.Iterating over the properties of an object:

const person = {
    name: 'John',
    age: 30,
    profession: 'Developer'
  };
  
  Object.keys(person).forEach((key) => {
    console.log(`${key}: ${person[key]}`);
  });
  
  // Output:
  // name: John
  // age: 30
  // profession: Developer



  // 6.Checking if an array contains a specific value:
const fruits = ['apple', 'banana', 'orange'];
let containsApple = false;

fruits.forEach((fruit) => {
  if (fruit === 'apple') {
    containsApple = true;
  }
});

console.log(containsApple); // true

// 7.Filtering an array based on a condition:

const num = [1, 2, 3, 4, 5];
const filteredNumbers = [];
num.forEach((number) => {
  if (number > 3) {
    filteredNumbers.push(number);
  }
});
console.log(filteredNumbers); // [4, 5]