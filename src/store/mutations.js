export function setSearchedMeals(state , maels) {
  state.searchedMeals = maels || []
}
export function setSearchedByLetter(state , maels) {
  state.mealsByLetter = maels || []
}
export function setSearchedByIngredient(state , maels) {
  state.mealsByIngredient = maels  || []
}