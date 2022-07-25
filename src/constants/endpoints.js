const RECIPES_ENDPOINTS = {
  GET_RECIPES_LIST: 'recipes',
  GET_RECIPE: recipeId => `recipes/${recipeId}`,
};

const SELECT_ENDPOINTS = {
  GET_HEALTH_OPTIONS: 'select/health',
  GET_DISH_OPTIONS: 'select/properties',
};

const SAVED_ENDPOINTS = {
  GET_SAVED_RECIPES_LIST: 'saved',
  GET_SAVED_RECIPE: recipeId => `saved/${recipeId}`,
};

export {RECIPES_ENDPOINTS, SELECT_ENDPOINTS, SAVED_ENDPOINTS};
