<script setup>
import {ref , onMounted} from 'vue'
import {useRoute} from 'vue-router'
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';
const meal = ref({})
const route = useRoute()

onMounted(()=>{
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({data})=>{
    debugger
    meal.value = data.meals[0] || {}
  })
})

</script>

<template>
  <div class="container mx-auto flex content-center flex-col mb-14">
    <h1 class="md:text-5xl font-semibold text-orange-500 text-center py-4">{{ meal.strMeal }}</h1>
     <div class="flex justify-center">
      <img class="h-80 object-cover rounded-lg shadow-md" :src="meal.strMealThumb" :alt="meal.strMeal">
     </div>
     <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-center border-b pb-2 mt-2 text-xs md:text-sm text-gray-500 px-2">
      <div class="md:text-center ">
       <strong class="font-semibold"> Category :</strong> {{ meal.strCategory }}
      </div>
      <div class="md:text-center ">
       <strong class="font-semibold"> Area : </strong>{{ meal.strArea }}
      </div>
      <div class="md:text-center ">
       <strong class="font-semibold"> Tags :</strong> {{ meal.strTags }}
      </div>
     </div>
     <div>
      <p class="text-justify p-3 text-base text-gray-800 w-11/12 shadow-md mx-auto my-2 rounded-md">
        {{ meal.strInstructions }}
      </p>
     </div>

     <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div class="rounded-md overflow-hidden bg-gray-100 shadow-md">
        <h2 class="text-white bg-orange-400 h-12 flex items-center p-2">Ingredients</h2>
        <ul class="p-2">
          <template v-for="(el,index) of new Array(20)">
            <li v-if="meal[`strIngredient${index+1}`]" class="text-gray-800 my-1 text-sm">
            {{ index+1 }} . {{ meal[`strIngredient${index + 1}`]}}
            </li>
          </template>
        </ul>
      </div>
      <div class="rounded-md overflow-hidden bg-gray-100 shadow-md">
        <h2 class="text-white bg-orange-400 h-12 flex items-center p-2">Measures</h2>
        <ul class="p-2">
          <template v-for="(el,index) of new Array(20)">
            <li v-if="meal[`strMeasure${index+1}`]" class="text-gray-800 my-1 text-sm">
            {{ index+1 }} . {{meal[`strMeasure${index + 1}`]}}
            </li>
          </template>
        </ul>
      </div>
     </div>
     <div class="flex justify-around px-2">
        <YouTubeButton :href="meal.strYoutube">Go To YouTube</YouTubeButton>
          <a target="_blank" :href="meal.strSource" class="bg-sky-600 hover:bg-white hover:text-sky-600 hover:border-sky-600 border p-3 px-4 rounded-md text-white duration-300 text-sm"
           >View Original Source</a>
      </div>
  </div>
</template>

