import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import HomeView from "../views/HomeView.vue";
import MealsByNameView from "../views/MealsByNameView.vue";
import MealsByLetterView from "../views/MealsByLetterView.vue";
import MealsByIngredientView from "../views/MealsByIngredientView.vue";
import MealDetailsView from '../views/MealDetailsView.vue'
import IngredientsView from '../views/IngredientsView.vue'

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByNameView,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetterView,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: IngredientsView,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredientView,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetailsView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
