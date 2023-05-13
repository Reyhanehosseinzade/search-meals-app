import axiosClient from '../axiosClient.js'

export function SearchMeals({commit} , keyword){
  axiosClient.get(`search.php?s=${keyword}`)
  .then(({data})=>{
    debugger
    commit("setSearchedMeals" , data.meals)
  })
}
export function SearchMealsByLetter({commit} , letter){
  axiosClient.get(`search.php?f=${letter}`)
  .then(({data})=>{
    commit("setSearchedByLetter" , data.meals)
  })
}
export function searchMealsByIngredient({commit} , ing){
  axiosClient.get(`filter.php?i=${ing}`)
  .then(({data})=>{
    commit("setSearchedByIngredient" , data.meals)
  })
}