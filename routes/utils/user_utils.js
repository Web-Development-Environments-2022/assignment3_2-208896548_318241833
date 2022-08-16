const DButils = require("./DButils");

async function markAsFavorite(user_id, recipe_id) {
  await DButils.execQuery(
    `insert into FavoriteRecipes values ('${user_id}',${recipe_id})`
  );
}

async function getFavoriteRecipes(user_id) {
  const recipes_id = await DButils.execQuery(
    `select recipe_id from FavoriteRecipes where user_id='${user_id}'`
  );
  return recipes_id;
}

async function addMyRecipe(
  user_id,
  id,
  title,
  readyInMinutes,
  image,
  vegan,
  vegetarian,
  glutenFree,
  extendedIngredients,
  instruction,
  servings
) {
  await DButils.execQuery(
    `insert into my_recipes values ('${user_id}','${id}','${title}','${readyInMinutes}','${image}','${vegan}','${vegetarian}','${glutenFree}','${extendedIngredients}','${instruction}','${servings}')`
  );
}

async function getMyRecipes(user_id) {
  const recipes = await DButils.execQuery(
    `select * from my_recipes where user_id='${user_id}'`
  );
  return recipes;
}

exports.markAsFavorite = markAsFavorite;
exports.getFavoriteRecipes = getFavoriteRecipes;
exports.addMyRecipe = addMyRecipe;
exports.getMyRecipes = getMyRecipes;
