const prettier = require("prettier");

function generateRecipeCard(recipe) {
  if (recipe === undefined) return "";
  const { name = "", ingredients = [], instructions = [] } = recipe;
  const recipeCard = prettier.format(
    `
  <section>
    <h2>${name}</h2>
      <h4>Ingredients:</h4>
      <ul>
      ${ingredients
        .map(
          (ingredient) =>
            `<li>${ingredient.name} <b>${ingredient.quantity}</b></li>`
        )
        .join("")}
      </ul>
      <h4>Instructions:</h4>
      <ol>
      ${instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
      </ol>
  </section>
  `,
    {
      parser: "html",
    }
  );
  return recipeCard;
}
module.exports = generateRecipeCard;
