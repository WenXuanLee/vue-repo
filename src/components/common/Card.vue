<template>
    <div class="card">
      <img :src="`/src/assets/images/${recipe.image}`" alt="Recipe Image" class="card-img" />
      <div class="card-body">
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">  
  import { computed } from 'vue';
  const props = defineProps<{
    recipe: {
      title: string;
      description: string;
      image: string;
    }
  }>();
  </script>
  
  <style scoped>
  .card {
    border: 1px solid var(--theme-border-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    width: 100%;
    max-width: 300px;
    height: 375px;
  }
  
  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 16px;
  }
  
  .card-body h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  
  .card-body p {
    margin: 8px 0 0;
    color: var(--theme-text-color-body);
  }
  </style>
  