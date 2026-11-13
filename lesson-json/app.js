const getDataButton = document.querySelector("#getDataButton");
const productNames = document.querySelector("#productNames");

getDataButton.addEventListener("click", async function () {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();

  console.log(result);

  result.products.forEach((product) => {
    productNames.innerHTML += `<li><img height="30" src="${product.thumbnail}">${product.title}</li>`;
  });
});
