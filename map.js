// map(): This method creates a new array with the results of calling a provided function on every element in the original array. 
// It is commonly used for transforming the elements of an array into a new format or structure.

// 1. Multiply every element in an array by 2

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// 2. Extract a specific property from an array of objects

const fruits = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "orange", color: "orange" }
  ];
  
  const fruitNames = fruits.map(fruit => fruit.name);
  console.log(fruitNames); // ["apple", "banana", "orange"]

  
// 3. Convert an array of strings to uppercase

const words = ["hello", "world", "how", "are", "you"];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords); // ["HELLO", "WORLD", "HOW", "ARE", "YOU"]


// 4. Using map() to extract specific values from nested arrays

const data = [
    { id: 1, values: [2, 4, 6] },
    { id: 2, values: [3, 6, 9] },
    { id: 3, values: [4, 8, 12] }
  ];
  
  const evenValues = data.map(item => {
    return {
      id: item.id,
      evenValues: item.values.filter(value => value % 2 === 0)
    };
  });
  
  console.log(evenValues);
  /*
  [
    { id: 1, evenValues: [2, 4, 6] },
    { id: 2, evenValues: [6] },
    { id: 3, evenValues: [4, 8, 12] }
  ]
  */
  
  
  // 5. Transforming an array of objects with nested arrays

  const users = [
    {
      id: 1,
      name: "Alice",
      grades: [80, 90, 70]
    },
    {
      id: 2,
      name: "Bob",
      grades: [70, 75, 65]
    },
    {
      id: 3,
      name: "Charlie",
      grades: [85, 80, 90]
    }
  ];
  
  const transformedUsers = users.map(user => {
    const averageGrade = user.grades.reduce((sum, grade) => sum + grade, 0) / user.grades.length;
    const letterGrade = averageGrade >= 80 ? "A" : (averageGrade >= 70 ? "B" : "C");
    
    return {
      id: user.id,
      name: user.name,
      grades: user.grades,
      averageGrade,
      letterGrade
    };
  });
  
  console.log(transformedUsers);
  /*
  [
    {
      id: 1,
      name: "Alice",
      grades: [80, 90, 70],
      averageGrade: 80,
      letterGrade: "A"
    },
    {
      id: 2,
      name: "Bob",
      grades: [70, 75, 65],
      averageGrade: 70,
      letterGrade: "B"
    },
    {
      id: 3,
      name: "Charlie",
      grades: [85, 80, 90],
      averageGrade: 85,
      letterGrade: "A"
    }
  ]
  */
  