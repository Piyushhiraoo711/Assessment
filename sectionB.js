// Conditional:
// Write a function checkNumber(num) that logs:
// "Positive" if num > 0
// "Negative" if num < 0
// "Zero" otherwise.

function checkNumber(num) {
  if (num > 0) console.log("Positive");
  else if (num < 0) console.log("Negative");
  else console.log("Zero");
}

// checkNumber(7)
// checkNumber(-1)
// checkNumber(0)

// Loop & Arrow Function:
// Write a function that takes an array of numbers and returns a new array with each number doubled using a forEach loop and arrow function.

let arr1 = [1, 2, 3, 4, 5];

function foreachFn(arr1) {
  arr1.forEach((element) => {
    console.log(element * 2);
  });
}

const arrowFun = () => {
  arr1.forEach((element) => {
    console.log(element * 2);
  });
};

console.log(foreachFn(arr1));
console.log(arrowFun(arr1));

// Object Destructuring & Template Literals:

// const user = { name: "John", age: 25 };
// Use destructuring and template literals to log:
// "John is 25 years old."

const user = { name: "John", age: 25 };
const { name, age } = user;
console.log(`${name}+ " is" + ${age} + " years old."`);

// Array Methods:
// Given:

// Use filter to get even numbers.
// Use reduce to get the sum of numbers.
// Log both results.
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.filter((i) => i % 2 == 0));
console.log(numbers.reduce((acc, curr) => acc + curr));

// Async/Await:
// Write a function that fetches data from https://jsonplaceholder.typicode.com/todos/1 using async/await and logs the JSON response.

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
