const generateRecipeCard = require("../lib/generate-recipe-card.js");
const prettier = require("prettier");

describe("generate-recipe-card", () => {
  const memberMuffinsRecipe = {
    name: "Member Muffins?",
    ingredients: [
      { name: "milk", quantity: "1 cup" },
      { name: "sugar", quantity: "2 tbs" },
      { name: "flour", quantity: "2 cups" },
    ],
    instructions: [
      "Preheat oven to 220C",
      "Mix ingredients",
      "Pour into baking tray",
      "Cook for 15 mins",
      "Enjoy!",
    ],
  };

  it("generates an empty string when no recipe is provided", () => {
    const actual = generateRecipeCard();
    const expected = `
    `;
    expect(actual).toEqual(prettier.format(expected, { parser: "html" }));
  });

  it("generates an empty recipe card when given a recipe with no name, ingredients or instructions", () => {
    const emptyRecipe = {};
    const actual = generateRecipeCard(emptyRecipe);
    const expected = `
    <section>
      <h2></h2>
      <h4>Ingredients:</h4>
      <ul></ul>
      <h4>Instructions:</h4>
      <ol></ol>
    </section>
    `;
    expect(actual).toEqual(prettier.format(expected, { parser: "html" }));
  });

  it("generates a recipe card with a name, ingredients and instructions", () => {
    const actual = generateRecipeCard(memberMuffinsRecipe);
    const expected = `
    <section>
      <h2>Member Muffins?</h2>
      <h4>Ingredients:</h4>
      <ul>
        <li>milk <b>1 cup</b></li>
        <li>sugar <b>2 tbs</b></li>
        <li>flour <b>2 cups</b></li>
      </ul>
      <h4>Instructions:</h4>
      <ol>
        <li>Preheat oven to 220C</li>
        <li>Mix ingredients</li>
        <li>Pour into baking tray</li>
        <li>Cook for 15 mins</li>
        <li>Enjoy!</li>
      </ol>
    </section>
    `;
    expect(actual).toEqual(prettier.format(expected, { parser: "html" }));
  });
});
