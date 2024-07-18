<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HomeTrending from '../components/HomeTrending.vue'
import RecipeList from '../components/RecipeList.vue'
</script>

<template>
  <main>
    <HomeTrending msg="Find your own flavor" />
    <RecipeList />
    <TheWelcome />
  </main>
</template>
