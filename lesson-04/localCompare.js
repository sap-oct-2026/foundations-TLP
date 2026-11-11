const a = "helder";
const b = "Helder";

if (a.toLowerCase === b.toLowerCase) {
  console.log("they are the same");
} else {
  console.log("they are NOT the same");
}

// if (a.localeCompare(b, "en", { sensitivity: "base" }) === 0) {
//   console.log("they are the same");
// } else {
//   console.log("they are NOT same");
// }
