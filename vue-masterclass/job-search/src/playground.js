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
