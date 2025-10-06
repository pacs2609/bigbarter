<template>
  <div class="size-selector">
    <label class="size-selector__label">Size:</label>
    <div class="size-selector__options">
      <button
        v-for="size in sizes"
        :key="size.label"
        class="option"
        :class="{ 'is-active': selectedSize === size.label }"
        :disabled="!size.available"
        @click="selectSize(size.label)"
      >
        {{ size.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define the shape of a single size option
interface Size {
  label: string;
  available: boolean;
}

// PROPS: An array of size objects
const props = defineProps<{
  sizes: Size[];
}>();

// EMITS: An event sent to the parent when a size is selected
const emit = defineEmits<{
  (e: 'change', size: string): void;
}>();

// Find the first available size to be the default selection
const findDefaultSize = () => props.sizes.find(s => s.available)?.label || '';

// STATE: The currently selected size
const selectedSize = ref(findDefaultSize());

// METHOD: Update the state and emit the change if the size is available
const selectSize = (sizeLabel: string) => {
  const size = props.sizes.find(s => s.label === sizeLabel);
  if (size && size.available) {
    selectedSize.value = sizeLabel;
    emit('change', sizeLabel);
  }
};

// Watch for changes in props to reset the selection
watch(() => props.sizes, () => {
  selectedSize.value = findDefaultSize();
}, { deep: true });
</script>

<style scoped>
.size-selector {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-family: sans-serif;
  margin: 1rem 0;
}

.size-selector__label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.size-selector__options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.option {
  min-width: 25px;
  height: 40px;
  padding: 0 0.75rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.option:hover:not(:disabled) {
  border-color: #DB4444;
  color: #DB4444;
}

.option.is-active {
  background-color: #DB4444;
  border-color: #DB4444;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 122, 255, 0.3);
}

.option:disabled {
  background-color: #f0f0f0;
  border-color: #e0e0e0;
  color: #aaa;
  cursor: not-allowed;
  /* Add a line-through effect for unavailable sizes */
  position: relative;
  overflow: hidden;
}

.option:disabled::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -10%;
  width: 120%;
  height: 2px;
  background: #c5c5c5;
  transform: rotate(-20deg);
}
</style>