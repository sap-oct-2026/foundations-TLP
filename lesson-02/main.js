// MATH OPERATIONS

//     +
//     -
//     *
//     /
//     %

const a = 7;
const b = 2;

const sum = a + b;
const sub = a - b;
const mult = a * b;
const divi = a / b;
const rest = a % b;

console.log(sum);
console.log(sub);
console.log(mult);
console.log(divi);
console.log(rest);

const result = 2 + 5 * 3;

const username = "Joe";
const greeting = "Hello " + result;

const x = NaN;
const y = 5;

console.log(x * y);

console.log(greeting);

const total = a + b;

console.log("The total is " + total);

// CONDITIONAL OPERATIONS
//     ==
//     !=
//     >
//     >=
//     <
//     <=

// true/false

if (a >= b + 5) {
  console.log("THIS CODE WILL RUN!");
}

const user2 = "Something"; // truthy, falsy

if (user2) {
  console.log("USER 2 EXISTS!");
} else {
  console.log("USER 2 DOES NOT EXIST!");
}

const value1 = "Test";
const value2 = 20;
const value3 = true;
const value4 = "";
let value5;
const value6 = undefined;
const value7 = NaN;

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
console.log(typeof value5);
console.log(typeof value6);
console.log(typeof value7);

const year = false;
const yearText = "";

console.log(year);
console.log(yearText);

if (year === yearText) {
  console.log("SAME!");
} else {
  console.log("NOT THE SAME!");
}
