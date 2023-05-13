<script setup>
import { onMounted , computed } from 'vue';
import Meals from '../components/Meals.vue'
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute()
const meals = computed(()=> store.state.mealsByIngredient)

onMounted(()=>{
  store.dispatch('searchMealsByIngredient' , route.params.ingredient)
})

</script>

<template>
  <Meals :meals="meals" />
</template>