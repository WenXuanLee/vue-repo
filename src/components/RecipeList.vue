<template>
    <div class="recipe-list">
      <div class="cards-container">
        <Card
          v-for="(recipe, index) in recipes"
          :key="index"
          :recipe="recipe"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Card from './common/Card.vue';
  
  // Sample data, replace with actual data fetching logic
  const recipes = ref([
    { title: 'Overnight Baked French Toast', description: 'ground nutmeg, white sugar, powdered sugar, whipped cream, eggs and 13 more', image: 'food-sample-1.jpg' },
    { title: 'Funeral Potatoes', description: 'Description 2', image: 'food-sample-2.jpg' },
    { title: 'Strawberry Fluff Jello Salad', description: 'Description 3', image: 'food-sample-3.jpg' },
    { title: 'Herbed Lemon Quinoa', description: 'Description 4', image: 'food-sample-1.jpg' },
    // ...more recipes
  ]);
  </script>
  
  <style scoped>
  .recipe-list {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
  
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    width: 100%;
  }
  </style>
  