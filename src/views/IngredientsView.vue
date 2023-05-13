<script setup>
import { onMounted , ref , computed } from 'vue';
import { RouterLink } from 'vue-router';
import axiosClient from '../axiosClient.js';

const ingredients = ref([])
const keyword = ref("")

const computedIngredients = computed(()=>{
  if(!computedIngredients) return ingredients
  return ingredients.value.filter(i =>i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()) 
  )
})
onMounted(() => {
  axiosClient.get(`list.php?i=list`)
  .then(({data})=>{
    ingredients.value = data.meals
  })
})

</script>

<template>
  <div class="px-3">
    <h2 class="text-3xl text-orange-500 m-3">ingredients</h2>
    <input
      v-model="keyword"
      class="rounded-md border-2 border-gray-400 w-full placeholder:text-sm"
      placeholder="Search by Ingredients..."
      type="text"
    />
    <div class="grid sm:grid-cols-2 gap-2 my-5">
      <RouterLink v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" :to="{name:'byIngredient' , params:{ingredient : ingredient.strIngredient}}" >
    <div class="shadow p-3 py-5 bg-white rounded-md">
      <h1 class="text-orange-500 text-lg">{{ ingredient.strIngredient }}</h1>
    </div>
  </RouterLink>
    </div>

  </div>
  
</template>