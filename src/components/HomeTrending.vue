<template>
  <div class="greetings">
    <h1 class="title green">{{ msg }}</h1>
    <SearchBar @update:query="handleSearch" />
    <h3 class="sub-title">
      Try to make the flavor on your own !
    </h3>
    <div class="filter-options">
        <Chip label="Popular" :active="true" :clickable="true" :clickAction="handleClick" />
        <Chip label="New" :clickable="true" :clickAction="handleClick" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Chip from './common/Chip.vue';
import SearchBar from './common/SearchBar.vue';

defineProps<{
  msg: string
}>()

const searchQuery = ref('');

const handleSearch = (query: string) => {
  searchQuery.value = query;
};

const handleClick = (label: string) => {
    // TODO add filter option to filter different card;
  alert(`Chip clicked: ${label}`);
};
</script>

<style scoped>
.filter-options {
    display: flex;
    align-items: center;
    justify-content: center;
}

title {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
.sub-title {
  font-size: 1.2rem;
}

.greetings {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
}

</style>
