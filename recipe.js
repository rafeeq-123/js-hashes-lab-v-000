'use strict';
function addIngredient(recipeObject,ingredientName,amounts ) {
  recipeObject[ingredientName] = amounts;
  return recipeObject;

}

function removeIngredient(recipeObject, ingredientName){
  delete recipeObject[ingredientName];
  return recipeObject;
}

function updateIngredient(recipeObject,ingredientName,amounts){
  recipeObject[ingredientName] = '3 cups';
  return recipeObject;
}

function readRecipe(recipeObject){
  for (var key in recipeObject) {
    console.log("this recipe calls for " + recipeObject[key] + " of " + key );
  }
}
