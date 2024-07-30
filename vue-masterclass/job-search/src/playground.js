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

// import axios from 'axios';

// const url = 'http://localhost:3000/jobs';

// const fetchJobsV1 = () => {
//   axios.get(url).then((response) => {
//     console.log(response.data);
//   });
// };

// const fetchJobsV2 = async () => {
//   const response = await axios.get(url);
//   console.log(response.data);
// };

// fetchJobsV2();

/* --------------------------------- */

const sushi = ['Tuna', 'Salmon', 'Yellowtail', 'Eel', 'Shrimp', 'Octopus', 'Uni'];

console.log(sushi.slice()); // everything
console.log(sushi.slice(4)); // everything index 4 -> end
console.log(sushi.slice(2, 4)); // everything index 2 -> 3

/* --------------------------------- */

// sets

const numberset = new Set();
numberset.add(5);
numberset.add(10);
numberset.add(15);
numberset.add(15); // not added a second time since it's already in

console.log(numberset);

/* --------------------------------- */

const numbers2 = [1, 3, 5, 4, 2, 6, 7, 3, 9, 124, 21];
console.log(numbers2.filter((number) => number > 6));

const jobs = [
  { title: 'angular dev', organization: 'microsoft' },
  { title: 'programmer dev', organization: 'google' },
  { title: 'developer', organization: 'microsoft' }
];

console.log(jobs.filter((job) => job.organization === 'microsoft'));

/* ----------------------------------- */

import { ref, reactive, computed, toRef, toRefs } from 'vue';

// not reactive
let a = 1;
let b = 2;
let c = a + b;
console.log(c);

a = 8;
console.log(c);

// also not reactive
let e = ref(1);
let f = ref(2);

console.log(e.value);
console.log(f.value);

let g = e.value + f.value;
console.log(g);

e.value = 10;
console.log(g);

// reactive
let r = ref(1);
let s = ref(2);

console.log(r.value);
console.log(s.value);

let t = computed(() => r.value + s.value);
console.log(t.value);

r.value = 10;
console.log(t.value);

// not reactive
let name = 'Boris';
let title = name + ' the Great';
console.log(title);

name = 'Peter';
console.log(title);

// reactive
const name2 = ref('Boris');
const title2 = computed(() => name2.value + ' the Great');
console.log(title2.value);

name2.value = 'Peter';
console.log(title2.value);

// reactive
const obj1 = ref({ name: 'Boris' });
const title2obj = computed(() => obj1.value.name + ' the Great');
console.log(title2obj.value);

obj1.value.name = 'Peter';
console.log(title2obj.value);

// reactive only supports objects, moves '.value' to the existing object itself
const obj2 = reactive({ name: 'Boris' });
const title3obj = computed(() => obj2.name + ' the Great');
console.log(title3obj.value);

obj2.name = 'Peter';
console.log(title3obj.value);

// reactive only supports objects, moves '.value' to the existing object itself
const obj3 = reactive({ firstName: 'Boris', lastName: 'Breja' });
const fullname = computed(() => `${obj3.firstName} ${obj3.lastName}`);
const fullnameLength = computed(() => fullname.value.length);
console.log(fullname.value);

obj3.firstName = 'Peter';
console.log(fullname.value);
console.log(fullnameLength.value);

obj3.lastName = 'Griffin';
console.log(fullname.value);
console.log(fullnameLength.value);

// not reactive
/*
const person1 = reactive({ firstName: 'Boris', lastName: 'Breja' });
let { firstName, lastName } = person1;
const full1name = computed(() => `${firstName} ${lastName}`);
console.log(full1name.value);
person1.firstName = 'Peter';
console.log(full1name.value);
*/

// reactive

const person4 = reactive({ firstName: 'Boris', lastName: 'Breja' });
const firstName4 = toRef(person4, 'firstName');
const lastName4 = toRef(person4, 'lastName');
const full1name4 = computed(() => `${firstName4.value} ${lastName4.value}`);
console.log(full1name4.value);
person4.firstName = 'Peter';
console.log(full1name4.value);

// reactive

const person5 = reactive({ firstName: 'Boris', lastName: 'Breja' });
const { firstName, lastName } = toRefs(person5);
const full1name5 = computed(() => `${firstName.value} ${lastName.value}`);
console.log(full1name5.value);
person5.firstName = 'Peter';
console.log(full1name5.value);

// reactive

const person6 = { firstName: 'Boris', lastName: 'Breja' };
const refPerson6 = toRefs(reactive(person6));
console.log(refPerson6);
