function test() {
  return 123;
}

const x = test();
console.log(x);

function rectPerimeter(w, h) {
  const p = (w + h) * 2;
  return p;
}

function rectArea(w, h) {
  return w * h;
}

function circleArea(radius) {
  //   return Math.PI * Math.pow(radius, 2);
  return Math.PI * radius ** 2;
}

function circlePerimeter(radius) {
  return Math.PI * radius * 2;
}

const result = rectPerimeter(4, 2);
console.log(`The perimeter is ${result}`);
