<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  href : String


})


</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="bg-[#FF0000] hover:bg-white hover:text-[#FF0000] hover:border-[#FF0000] border p-3 px-4 rounded-md text-white duration-300 text-sm"
    >
    <slot></slot>
    
    </a
  >
</template>
