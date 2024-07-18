<template>
    <div class="chip" :class="{ 'chip-clickable': clickable, 'chip-active': active }" @click="handleClick">
      <span>{{ label }}</span>
      <button v-if="removable" class="chip-close" @click.stop="removeChip">&times;</button>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    label: string;
    removable?: boolean;
    clickable?: boolean;
    clickAction?: (label: string) => void;
    active?: boolean;
  }>();
  
  const emits = defineEmits(['click', 'remove']);
  
  const handleClick = () => {
    if (props.clickable && props.clickAction) {
      props.clickAction(props.label);
    }
    emits('click');
  };
  
  const removeChip = () => {
    emits('remove');
  };
  </script>
  
  <style scoped>
  .chip {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: white;
    border: 1px solid var(--theme-color);
    border-radius: 16px;
    font-size: 14px;
    margin: 0.5rem;
    color: var(--theme-color);
    transition: background-color 0.3s, color 0.3s;
  }
  
  .chip-clickable {
    cursor: pointer;
  }
  
  .chip-clickable:hover {
    background-color: var(--theme-color);
    color: white;
  }
  
  .chip-active {
    background-color: var(--theme-color);
    color: white;
  }
  
  .chip-close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-left: 8px;
    color: inherit;
  }
  </style>
  