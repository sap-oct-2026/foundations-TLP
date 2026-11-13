// function downloadRecipes() {
//   // I NEED TO CONNECT TO THE WEBSERVER VIA A URL

//   console.log("READY SET GO!");

//   fetch("https://dummyjson.com/recipes/").then(function (response) {
//     console.log("THE RESPONSE IS READY!");
//     response.json().then(function (result) {
//       console.log(result);

//       displayRecipes(result);
//     });
//   });

//   console.log("I WAIT FOR NOONE!");
// }

const showRecipesButton = document.querySelector("#showRecipesButton");
const resultsBox = document.querySelector("#resultsBox");

let recipes = [];

function displayRecipes(recipes) {
  // recipes.sort((a, b) => a.name.localeCompare(b.name));

  resultsBox.innerHTML = "";
  recipes.forEach((recipe) => {
    resultsBox.innerHTML += `<p>${recipe.name} <button data-id="${recipe.id}">Details</button></p>`;
  });
}

// async/await syntax to handle Promises
async function downloadRecipes() {
  resultsBox.innerHTML = "LOADING...";
  const response = await fetch("https://dummyjson.com/recipes/?sortBy=name");
  const result = await response.json();

  recipes = result.recipes;

  displayRecipes(result.recipes);
}

showRecipesButton.addEventListener("click", function () {
  downloadRecipes();
});

resultsBox.addEventListener("click", async function (event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const recipeId = event.target.dataset.id;

  // OPTION 1: find my current array
  const foundRecipe = recipes.find((recipe) => recipe.id === Number(recipeId));
  console.log(foundRecipe);

  // OPTION 2: can fetch the data again by id
  //   const response = await fetch("https://dummyjson.com/recipes/" + recipeId);
  //   const result = await response.json();

  //   console.log(result);
});
