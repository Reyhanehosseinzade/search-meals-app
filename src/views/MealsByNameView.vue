<script setup>
import { ref, computed, onMounted , watch} from "vue";
import store from "../store/index.js";
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue'

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const route = useRoute()

const searchMeals = () => {
  if(keyword.value){
    store.dispatch("SearchMeals", keyword.value);
  }else{
    store.commit("setSearchedMeals", []);
  }
 
};

onMounted(()=>{
  keyword.value = route.params.name
  if(keyword.value){
    searchMeals()
  }
})

</script>

<template>
  <div class="flex justify-center p-3 container mx-auto">
    <input
      v-model="keyword"
      @change="searchMeals"
      class="rounded-md border-2 border-gray-400 w-full placeholder:text-sm"
      placeholder="Search for Meals..."
      type="text"
    />
  </div>
  <Meals :meals="meals" />
</template>
