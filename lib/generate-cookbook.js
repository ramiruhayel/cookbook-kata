const prettier = require("prettier");
const generateRecipeCards = require("./generate-recipe-cards.js");

function generateCookbook(recipes) {
  // Calling `prettier.format("<html>Your HTML String</html>",{parser:"html"})` means that your HTML report will always be formatted consistently.
  // This will prevent your snapshots from failing to match simply due to formatting differences between what you produce (below) and what is stored
  // in the snapshot files.
  return prettier.format(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
    </head>
    <body>
        ${generateRecipeCards(recipes)}
    </body>
    </html>`,
    { parser: "html" }
  );
}
module.exports = generateCookbook;
