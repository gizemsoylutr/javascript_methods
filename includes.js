// 1. Check if an array includes a specific element

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false


// 2. Check if a string includes a substring

const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox")); // true
console.log(sentence.includes("cat")); // false


// 3. Check if an array of objects includes an object with a specific property value

const fruits = [  { name: "apple", color: "red" },  { name: "banana", color: "yellow" },  { name: "orange", color: "orange" }];
console.log(fruits.includes({ name: "apple", color: "red" })); // false
console.log(fruits.some(fruit => fruit.name === "apple" && fruit.color === "red")); // true
