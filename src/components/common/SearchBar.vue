<template>
    <div class="search-bar">
        <input type="text" v-model="query" @input="updateSearch" placeholder="Search for a recipe..." />
        <button @click="clearSearch" v-if="query">×</button>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    placeholder?: string;
}>();
const emits = defineEmits(['update:query']);
const query = ref('');

const updateSearch = () => {
    emits('update:query', query.value);
};

const clearSearch = () => {
    query.value = '';
    emits('update:query', query.value);
};
</script>
  
<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    border: 1px solid var(--theme-border-color);
    border-radius: 16px;
    padding: 0.5rem;
    min-width: 50%;
    background-color: #fff;
}

.search-bar:hover,
.search-bar:focus-within {
    border-color: var(--theme-color);
}

.search-bar input {
    border: none;
    outline: none;
    flex: 1;
    padding: 0.5rem;
    border-radius: var(--theme-radius-large);
}

.search-bar button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #ccc;
}
</style>
  