// find(): This method returns the value of the first element in the array that satisfies the provided test function. 
// It is commonly used for finding a specific element in an array based on certain criteria.

// 1.Finding an element in an array of objects by a property value

const people = [
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 42 },
    { name: 'Dana', age: 19 }
  ];
  const charlie = people.find(person => person.name === 'Charlie');
  console.log(charlie); // { name: 'Charlie', age: 42 }
  

  // 2.Finding an element in an array by an index

  const numbers = [10, 20, 30, 40, 50];

  const number = numbers.find((value, index) => index === 3);
  console.log(number); // 40

  
  // 3.Finding an element in an array using a callback function

  const num = [10, 20, 30, 40, 50];
  const divisibleBy3 = num.find(number => number % 3 === 0);
  console.log(divisibleBy3); // 30

  
  // 4.Finding an element in an array of strings by a substring. (find() method returns the first name in the array that satisfies this condition.)

  const names = ['Alice', 'Bob', 'Charlie', 'Dana'];
  const nameWithSubstring = names.find(name => name.includes('li'));
  console.log(nameWithSubstring); // 'Alice'

  
  // 5. Finding an element in an array of objects by multiple criteria

  const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'The Sun Also Rises', author: 'Ernest Hemingway', year: 1926 }
  ];

  const book = books.find(book => book.year > 1930 && book.author === 'F. Scott Fitzgerald');
  console.log(book); // { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }


  // 6. 



