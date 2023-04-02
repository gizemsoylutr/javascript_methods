// findIndex(): This method returns the index of the first element in the array that satisfies the provided test function. 
// It is commonly used for finding the index of a specific element in an array based on certain criteria.

// 1.Finding the index of an element in an array

const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex(number => number > 30);
console.log(index); // 3


// 2.Finding the index of an object in an array by a property

const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'The Sun Also Rises', author: 'Ernest Hemingway', year: 1926 }
  ];

const ind = books.findIndex(book => book.title === 'To Kill a Mockingbird');
console.log(ind); // 1


// 3. Finding the index of the last occurrence of an element in an array

const num = [10, 20, 30, 20, 40];
const lastIndex = num.reverse().findIndex(number => number === 20);
console.log(lastIndex); // 1

 
// 4. Finding the index of an object in an array of objects

const people = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Mary', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 40 }
  ];
  
const i = people.findIndex(person => person.id === 3);
console.log(i); // 2


