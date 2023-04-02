// filter(): This method creates a new array with all elements that pass the test implemented by a provided function. 
// It is commonly used for selecting specific elements from an array based on certain criteria.

// 1.Checking if an array has any odd numbers:

const numbers = [2, 4, 6, 7, 8, 10];
const hasOddNumbers = numbers.some((number) => {
  return number % 2 === 1;
});
console.log(hasOddNumbers); // true


// 2.Checking if an array has any duplicate values:

const products = [
    { name: 'Widget A', price: 9.99, inStock: true },
    { name: 'Widget B', price: 19.99, inStock: false },
    { name: 'Widget C', price: 29.99, inStock: true },
    { name: 'Widget D', price: 39.99, inStock: false }
  ];
const inStockProducts = products.filter((product) => {
    return product.inStock;
  });
console.log(inStockProducts);
  // [
  //   { name: 'Widget A', price: 9.99, inStock: true },
  //   { name: 'Widget C', price: 29.99, inStock: true }
  // ]


  // 3.Filtering an array based on a search term:

const fruits = ['apple', 'banana', 'orange', 'pear'];
const searchResults = fruits.filter((fruit) => {
  return fruit.includes('a');
});
console.log(searchResults); // ['apple', 'banana', 'orange', 'pear']


 // 4.Filtering an array of objects based on multiple conditions:

 const people = [
    { name: 'Alice', age: 23, gender: 'female' },
    { name: 'Bob', age: 27, gender: 'male' },
    { name: 'Charlie', age: 31, gender: 'male' },
    { name: 'Dana', age: 21, gender: 'female' }
  ];
  
  const youngFemales = people.filter((person) => {
    return person.gender === 'female' && person.age < 25;
  });
  
  console.log(youngFemales); // [{ name: 'Alice', age: 23, gender: 'female' }, { name: 'Dana', age: 21, gender: 'female' }]


// 5. Let's find the pass exam by average

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 73 },
    { name: 'Charlie', grade: 92 },
    { name: 'Dana', grade: 68 },
    { name: 'Emily', grade: 91 },
    { name: 'Frank', grade: 77 },
    { name: 'Grace', grade: 88 }
  ];


function aboveAverageStudents(students) {
    // Calculate the average grade for the class
    const average = students.reduce((total, student) => {return total + student.grade;},0) / students.length;

    // Use the filter() method to create a new array of students who scored higher than the average

    const aboveAverage = students.filter((student) => { return student.grade > average;});

    return aboveAverage;
}
const result = aboveAverageStudents(students);
console.log(result);  // [{ name: 'Alice', grade: 85 }, { name: 'Charlie', grade: 92 }, { name: 'Emily', grade: 91 }, { name: 'Grace', grade: 88 }]

