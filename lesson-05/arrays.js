const myFirstArray = [10, 20, 30, 40, 50];

// console.log(myFirstArray[0]);
// console.log(myFirstArray[1]);
// console.log(myFirstArray[2]);
// console.log(myFirstArray[3]);
// console.log(myFirstArray[4]);

// const pos = 10;
// console.log(myFirstArray[pos]);

for (let i = 0; i < myFirstArray.length; i += 1) {
  console.log(myFirstArray[i]);
}

// ARRAY FUNCTIONS!
myFirstArray.forEach((value, index) => {
  console.log(`For index ${index}, the value is ${value}`);
});

const colors = ["Yellow", "Blue", "Black", "Pink", "Red", "Green"];

console.log(colors);
colors.sort();
console.log(colors);

const numbers = [23, 12, 43, 45, 1, 3, 5444, 34, 12, 777];

// console.log(numbers);

// for (let x = 0; x < numbers.length; x++) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i + 1]) {
//       // I change the variables if the one on the left is higher
//       // i do this for every element of the array
//       const temp = numbers[i];
//       numbers[i] = numbers[i + 1];
//       numbers[i + 1] = temp;
//     }
//   }
// }

// console.log(numbers);

// console.log(numbers);
// numbers.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(numbers);

// console.log(numbers);
// numbers.sort(function (a, b) {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(numbers);

// console.log(numbers);
// numbers.sort(function (a, b) {
//   console.log(`A: ${a}`);
//   console.log(`B: ${b}`);
//   console.log(numbers);
//   return a - b;
// });
// console.log(numbers);

// console.log(numbers);
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// const filteredNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 30) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);
// console.log(numbers);

const filteredNumbers = numbers.filter((value) => value > 500);

console.log(filteredNumbers);
console.log(numbers);

// WHAT DOES MAP DO?
// const mappedNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   const newValue = `<li>${numbers[i]}</li>`;
//   mappedNumbers.push(newValue);
// }

const mappedNumbers = numbers.map((value) => `<li>${value}</li>`);

console.log(mappedNumbers);

const username = "Francis";
const course = "SAP";
const greeting =
  "Hi " +
  username +
  "! I head you were learning " +
  course +
  ", how is it going?";

console.log(greeting);

// TEMPLATE LITERAL
const anotherGreeting = `Hello ${username}, I heard you were learning ${course}. Good for you!`;
console.log(anotherGreeting);
