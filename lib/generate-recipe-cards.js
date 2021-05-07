const generateRecipeCard = require("./generate-recipe-card.js");
function generateRecipeCards(recipes = []) {
  const recipeCards = recipes.map(generateRecipeCard);
  return recipeCards.join("");
}
module.exports = generateRecipeCards;
