const generateRecipeCards = require("../lib/generate-recipe-cards.js");
const prettier = require("prettier");

describe("generate-recipe-cards", () => {
  const barfaliciousBrowniesRecipe = {
    name: "Barfalicious Brownies",
    ingredients: [
      { name: "sour milk", quantity: "3 cups" },
      { name: "pop rocks", quantity: "3 tsp" },
      { name: "milo", quantity: "1 cup" },
    ],
    instructions: [
      "Preheat oven to 180C",
      "Mix ingredients",
      "Pour into baking tray",
      "Cook for 25 mins",
      "Barf!",
    ],
  };

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

  it("generates an empty string when given an empty list of recipes", () => {
    const emptyListOfRecipes = [];
    const actual = generateRecipeCards(emptyListOfRecipes);
    const expected = `
    `;
    expect(actual).toEqual(prettier.format(expected, { parser: "html" }));
  });

  it("generates 1 recipe card when given a list containing a single recipe", () => {
    const actual = generateRecipeCards([memberMuffinsRecipe]);
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

  it("generates 2 recipe cards when given a list containing a two recipes", () => {
    const actual = generateRecipeCards([
      memberMuffinsRecipe,
      barfaliciousBrowniesRecipe,
    ]);
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
    <section>
      <h2>Barfalicious Brownies</h2>
      <h4>Ingredients:</h4>
      <ul>
        <li>sour milk <b>3 cups</b></li>
        <li>pop rocks <b>3 tsp</b></li>
        <li>milo <b>1 cup</b></li>
      </ul>
      <h4>Instructions:</h4>
      <ol>
        <li>Preheat oven to 180C</li>
        <li>Mix ingredients</li>
        <li>Pour into baking tray</li>
        <li>Cook for 25 mins</li>
        <li>Barf!</li>
      </ol>
    </section>
    `;
    expect(actual).toEqual(prettier.format(expected, { parser: "html" }));
  });
});
