// logical operators
//
//       &&   and
//       ||   or

//       !    not

const name = "Joe";
const age = 20;
const city = "London";

if (20 >= 18 && city === "London") {
  console.log("He went to the pub");
}

let isAdmin;

if (!isAdmin) {
  console.log("You need to login first!");
}

// Note: javascript is weird!

const color = "red"; // truthy
const result = !color;
