const box1 = document.querySelector("#box1");
const imageBox = document.querySelector("#imageBox");

const buttonPrevious = document.querySelector("#buttonPrevious");
const buttonNext = document.querySelector("#buttonNext");

const colors = ["red", "green", "blue", "yellow", "#34ACFF"];
const images = ["homer.png", "marge.png", "bart.png", "lisa.png", "maggie.jpg"];

let counter = 0;
box1.textContent = "0";
box1.style.backgroundColor = colors[counter];
imageBox.src = `./images/${images[counter]}`;

buttonNext.addEventListener("click", () => {
  counter += 1;
  if (counter >= colors.length) {
    counter = 0;
  }
  box1.textContent = counter;
  box1.style.backgroundColor = colors[counter];
  imageBox.src = `./images/${images[counter]}`;
});

buttonPrevious.addEventListener("click", () => {
  counter -= 1;
  if (counter < 0) {
    counter = colors.length - 1;
  }
  box1.textContent = counter;
  box1.style.backgroundColor = colors[counter];
  imageBox.src = `./images/${images[counter]}`;
});

// replicate this code, button that goes forward, and a button that goes back
// the second button decreases the counter

// BONUS:
// use an array of colors
// to change the background to the next color and so on
