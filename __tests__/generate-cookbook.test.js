const generateCookbook = require("../lib/generate-cookbook.js");

describe("generate-cookbook", () => {
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
    name: "'Member Muffins?",
    ingredients: [
      { name: "milk", quantity: "1 cup" },
      { name: "sugar", quantity: "2 tbs" },
      { name: "flour", quantity: "2 cups" },
    ],
    instructions: [
      "Preheat oven to 220C",
      "Mix ingredients",
      "Pour into backing tray",
      "Cook for 15 mins",
      "Enjoy!",
    ],
  };
  it("generates an empty cookbook when there are no recipes", () => {
    expect(generateCookbook([])).toMatchSnapshot();
  });

  it.only("generates a cookbook given a single recipe", () => {
    expect(generateCookbook([memberMuffinsRecipe])).toMatchSnapshot();
  });
  it("generates a cookbook given a two recipes", () => {
    expect(
      generateCookbook([memberMuffinsRecipe, barfaliciousBrowniesRecipe])
    ).toMatchSnapshot();
  });
  it("generates a cookbook given 10 recipes", () => {
    expect(
      generateCookbook(
        Array(5)
          .fill(memberMuffinsRecipe)
          .concat(Array(5).fill(barfaliciousBrowniesRecipe))
      )
    ).toMatchSnapshot();
  });
});
