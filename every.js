// every(): This method tests whether all elements in the array pass a provided test function. 
// It returns true if all elements pass the test, and false otherwise. 
// It is commonly used for checking if all elements in an array meet certain criteria.


// 1. Checking if all elements in an array are numbers:

const numbers = [1, 2, 3, 4, 5];
const allNumbers = numbers.every((number) => {
  return typeof number === 'number';
});
console.log(allNumbers); // true


// 2. Checking if all elements in an array are non-negative:

const num = [1, 2, -3, 4, 5];
const allNonNegative = num.every((number) => {
  return number >= 0;
});
console.log(allNonNegative); // false


// 3. Checking if all elements in an array satisfy a complex condition:

const products = [
    { name: 'Widget A', price: 9.99, inStock: true },
    { name: 'Widget B', price: 19.99, inStock: true },
    { name: 'Widget C', price: 29.99, inStock: false },
    { name: 'Widget D', price: 39.99, inStock: true }
  ];
  
  const requiredProducts = [
    { name: 'Widget A', price: 9.99 },
    { name: 'Widget B', price: 19.99 },
    { name: 'Widget D', price: 39.99 }
  ];
  
  const allRequiredProductsInStock = requiredProducts.every((requiredProduct) => {
    return products.some((product) => {    // some() method to check if there is any product in the products array that matches the required product by name, price, and is in stock.
      return product.name === requiredProduct.name &&
             product.price === requiredProduct.price &&
             product.inStock;
    });
  });
  console.log(allRequiredProductsInStock); // true





