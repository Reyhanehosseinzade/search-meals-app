<script setup>
  import { RouterLink } from 'vue-router';
  import {defineProps} from 'vue';
  import YouTubeButton from './YouTubeButton.vue';

  const {meal} = defineProps({
    meal : Object
  })

</script>

<template>
  <div
      class="shadow-md bg-white hover:shadow-orange-300/20 sm:hover:scale-105 duration-300 rounded-md overflow-hidden"
    >
    <RouterLink :to="{name:'mealDetails' , params:{id: meal.idMeal}}">
      <img class="object-cover w-full h-40" :src="meal.strMealThumb" :alt="meal.strMeal" />
    </RouterLink>
    <div class="py-2">
        <h3 class="text-center text-orange-500 text-sm px-2">
          {{ meal.strMeal }}
        </h3>
        <p class="text-xs text-gray-500 p-1 px-2">
          {{ $filters.truncateWords(meal.strInstructions, 20) }}
        </p>
        <div class="p-3 py-2 flex justify-around text-xs">
          <YouTubeButton :href="meal.strYoutube" >YouTube</YouTubeButton>
        </div>
      </div>
    </div>
</template>