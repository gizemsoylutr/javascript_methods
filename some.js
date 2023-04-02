// some(): This method tests whether at least one element in the array passes a provided test function. 
// It returns true if at least one element passes the test, and false otherwise. 
// It is commonly used for checking if at least one element in an array meets certain criteria.


// 1.Checking if an array has any odd numbers:

const numbers = [1, 4, 6, 7, 8, 10];
const hasOddNumbers = numbers.some((number) => {
  return number % 2 === 1;
});
console.log(hasOddNumbers); // true


// 2.Checking if an array has any duplicate values:

const num = [4, 5, 6,77,77];
const hasDuplicates = num.some((number, index) => {
  return num.indexOf(number) !== index; // the indexOf() method to check if the current element is present at a different index in the array.
});
console.log(hasDuplicates); // true


// 3.Checking if an array has any products on sale:

const products = [
    { name: 'Widget A', price: 9.99, onSale: false },
    { name: 'Widget B', price: 19.99, onSale: true },
    { name: 'Widget C', price: 29.99, onSale: false },
    { name: 'Widget D', price: 39.99, onSale: false }
  ];
  const hasProductsOnSale = products.some((product) => {
    return product.onSale;
  });
  console.log(hasProductsOnSale); // true




// 4. any customer has made a purchase over $100.

const customers = [
    {
      name: 'Alice',
      purchases: [
        { product: 'Widget A', price: 59.99 },
        { product: 'Widget B', price: 79.99 },
        { product: 'Widget C', price: 109.99 }
      ]
    },
    {
      name: 'Bob',
      purchases: [
        { product: 'Widget D', price: 29.99 },
        { product: 'Widget E', price: 39.99 },
        { product: 'Widget F', price: 49.99 }
      ]
    },
    {
      name: 'Charlie',
      purchases: [
        { product: 'Widget G', price: 89.99 },
        { product: 'Widget H', price: 99.99 },
        { product: 'Widget I', price: 119.99 }
      ]
    }
  ];
  
  const hasBigSpender = customers.some((customer) => {
    return customer.purchases.some((purchase) => {
      return purchase.price > 100;
    });
  });
  
  console.log(hasBigSpender); // true


  