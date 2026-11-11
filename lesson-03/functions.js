function greetingToMyFriends() {
  console.log("HELLO TO ALL MY FRIENDS!");
  console.log("HOW ARE YOU DOING?");
}

function greeting(friendName) {
  console.log(`Hello ${friendName} how are you doing?`);
}

function rectanglePerimeter(width, height) {
  const p = width + width + height + height;
  console.log(`The rectangle of ${width} by ${height} has a perimeter of ${p}`);
}

function sumTwoValues(a, b) {
  console.log(a + b);
}

greeting("Joe");
greeting("Hannah");

const username = "Jane";
greeting(username);

sumTwoValues(23, 1);
sumTwoValues(34, 45);

rectanglePerimeter(3, 3);
rectanglePerimeter(3, 5);
rectanglePerimeter(13, 12);

const result = Math.sqrt(9);
console.log(`the result is ${result}`);
