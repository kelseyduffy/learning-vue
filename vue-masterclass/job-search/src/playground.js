// run this js file directly with `node src/playground.js` in job-serach folder

const numbers = [1, 2, 3, 4, 5];
const names = ['BOBBY', 'SALLY', 'DEBBIE'];

/* fully written out method 
const squares = numbers.map((number) => {
  return number * number;
}); */

// short hand. one liner lets you remove {}'s and `return`
const squares = numbers.map((number) => number * number);

const lowercaseNames = names.map((name) => {
  return name.toLowerCase();
});

console.log(squares);
console.log(lowercaseNames);

/* -------------------------------- */

export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

export const multiply = (num1, num2) => {
  return num1 * num2;
};

/* ------------------------------- */

const favoriteFood = 'sushi';

const goodFoods = {
  // square brackets let you use a variable for the key name
  [favoriteFood]: true
};

console.log(goodFoods);

/* --------------------------------- */

// runs once
setTimeout(() => {
  console.log('I will print 2 seconds after the program starts');
}, 2000);

// runs forever
const interval = setInterval(() => {
  console.log('I will print every 2 seconds');
}, 2000);

console.log(interval);

// stops the interval from running forever
setTimeout(() => {
  clearInterval(interval);
}, 10000);

/* ---------------------------------- */

import axios from 'axios';

const url = 'http://localhost:3000/jobs';
axios.get(url).then((response) => {
  console.log(response.data);
});
