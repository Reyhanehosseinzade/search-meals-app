<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="bg-white shadow-md h-16 flex items-center px-2 md:px-5 justify-between">
			<RouterLink :to="{name: 'home'}" class="h-full text-xs md:text-sm flex items-center hover:bg-slate-100 p-2 duration-300" active-class="activeHome">
				Home
			</RouterLink>
			<div class="flex gap-1 md:gap-5 items-center h-full">
				<RouterLink :to="{name:'byName'}" class="h-full text-xs md:text-sm flex items-center hover:bg-slate-100 p-1 md:p-2 duration-300" active-class="activePage">
				Search Meals
			</RouterLink>
				<RouterLink :to="{name:'byLetter'}" class="h-full text-xs md:text-sm flex items-center hover:bg-slate-100 p-1 md:p-2 duration-300" active-class="activePage">
				Meals By Letter
			</RouterLink>
				<RouterLink :to="{name:'ingredients'}" class="h-full text-xs md:text-sm flex items-center hover:bg-slate-100 p-1 md:p-2 duration-300" active-class="activePage">
				Meals By ingredients
			</RouterLink>
			</div>
		</header>
</template>


<style scoped>

.activePage{
	color: cornflowerblue;
}
.activeHome{
	color: rgb(78, 137, 247);
}
</style>