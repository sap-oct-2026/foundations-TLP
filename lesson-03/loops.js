//     while
//     for      -> classical for loops

let x = 0;

while (x < 10) {
  console.log("The value of X is: " + x);

  //   x = x + 1;
  x++;
}

let secretPin = 4542;
let inputPin = 23;
let counterTries = 0;

while (inputPin !== secretPin && counterTries < 3) {
  console.log("try again!");
  counterTries = counterTries + 1;
}

const number = 3;
for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(number + " x " + i + " = " + result);
  console.log(`${number} x ${i} = ${result}`);
}

const username = "Helder";
let city = "Hamburg";
let age = 45;

city = "Porto";

console.log("Hello my name is " + username + " and I live in " + city);
console.log(
  `Hello my name is ${username} and I live in ${city} and I am ${age} years old`,
);

// `` => template literals || string literals
