<script setup>
import { defineProps } from "vue";
import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
  meals: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section
    class="md:w-11/12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full container mx-auto p-4"
  >
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </section>
  <div v-if="!meals.length" class="flex justify-center my-5">
    There are no meals
  </div>
</template>
