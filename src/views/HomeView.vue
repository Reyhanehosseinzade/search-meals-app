<script setup>
import {onMounted , ref} from 'vue'
import axiosClient from '../axiosClient.js'

const ingredients = ref([])

onMounted(async() => {
 const response = await axiosClient.get("/list.php?i=list")
 ingredients.value = response.data
})



</script>

<template>
  <main class="min-h-screen p-3">
    <div class="flex gap-2 border border-black justify-center p-2">
    </div>
  </main>
</template>