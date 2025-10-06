<template>
  <div class="color-selector">
    <label classs="fs-5 fw-600">Colors : </label>
    <div class="color-selector__swatches">
      <button
        v-for="color in colors"
        :key="color"
        class="swatch"
        :class="{ 'is-active': selectedColor === color }"
        :style="{ backgroundColor: color }"
        @click="selectColor(color)"
        :aria-label="`Select color ${color}`"
      >
        <svg v-if="selectedColor === color" class="swatch__checkmark" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// PROPS: An array of color strings (e.g., hex codes)
const props = defineProps<{
  colors: string[];
}>();

// EMITS: An event sent to the parent when a color is selected
const emit = defineEmits<{
  (e: 'change', color: string): void;
}>();

// STATE: The currently selected color
const selectedColor = ref(props.colors[0] || '');

// METHOD: Update the state and emit the change
const selectColor = (color: string) => {
  selectedColor.value = color;
  emit('change', color);
};

// Watch for changes in props to reset selection if colors array changes
watch(() => props.colors, (newColors) => {
  selectedColor.value = newColors[0] || '';
});
</script>

<style scoped>
.color-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
}

label {
  font-weight:600;
  font-size: 16px;
}

.color-selector__swatches {
  display: flex;
  gap: 8px;
}

.swatch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, border-color 0.2s;
  padding: 0;
}

.swatch:hover {
  transform: scale(1.1);
}

.swatch.is-active {
  border-color: #dadada; /* Highlight active swatch */
  box-shadow: 0 0 0 2px white, 0 0 0 4px #dadada;
}

.swatch__checkmark {
  width: 20px;
  height: 20px;
  fill: white;
  pointer-events: none;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.4));
}
</style>