<script setup>
import { useRoute } from 'vue-router';
import {computed , onMounted , watch} from 'vue'
import Meals from '../components/Meals.vue'
import store from '../store';
const letters = 'ABCDEFGHIJKLMNOPQRSTWXYZ'.split("")

const route = useRoute()
const meals = computed(()=> store.state.mealsByLetter)
watch(route , ()=>{
  store.dispatch('SearchMealsByLetter' , route.params.letter)
})
onMounted(()=>{
  store.dispatch('SearchMealsByLetter' , route.params.letter)
})

</script>

<template>
  <div class="flex justify-center gap-4 w-full border ">
    <RouterLink :to="{name:'byLetter' , params:{letter}}" v-for="letter of letters" :key="letter">
      {{ letter }}
    </RouterLink>
  </div>
 <Meals :meals="meals" />
</template>