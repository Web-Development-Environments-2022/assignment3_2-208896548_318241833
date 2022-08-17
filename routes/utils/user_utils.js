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

async function addToHistory(user_id, recipe_id) {
  await DButils.execQuery(
    `insert into history values ('0', '${user_id}',${recipe_id})`
  );
}

async function getHistory(user_id) {
  const recipes_id = await DButils.execQuery(
    `select recipe_id from history where user_id='${user_id}'`
  );
  return recipes_id;
}

async function inFavorites(user_id, recipe_id) {
  const result = await DButils.execQuery(
    `select COUNT(*) from FavoriteRecipes where (user_id='${user_id}' and recipe_id='${recipe_id}')`
  );
  return result;
}

async function inHistory(user_id, recipe_id) {
  const result = await DButils.execQuery(
    `select COUNT(*) from history where (user_id='${user_id}' and recipe_id='${recipe_id}')`
  );
  return result;
}

async function addMyRecipe(
  user_id,
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
    `insert into my_recipes values ('${user_id}','0','${title}','${readyInMinutes}','${image}','${vegan}','${vegetarian}','${glutenFree}','${extendedIngredients}','${instruction}','${servings}')`
  );
}

async function getMyRecipes(user_id) {
  const recipes = await DButils.execQuery(
    `select * from my_recipes where user_id='${user_id}'`
  );
  return recipes;
}

async function getMyRecipeDetails(recipe_id) {
  const recipes = await DButils.execQuery(
    `select * from my_recipes where id='${recipe_id}'`
  );
  return recipes;
}

exports.markAsFavorite = markAsFavorite;
exports.getFavoriteRecipes = getFavoriteRecipes;
exports.inFavorites = inFavorites;
exports.inHistory = inHistory;
exports.addMyRecipe = addMyRecipe;
exports.getMyRecipes = getMyRecipes;
exports.getMyRecipeDetails = getMyRecipeDetails;
exports.getHistory = getHistory;
exports.addToHistory = addToHistory;
