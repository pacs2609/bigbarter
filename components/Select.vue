<template>
  <div class="dropdown">
    <a class="u-select" type="button" id="select-box" data-bs-toggle="dropdown" aria-expanded="false">
      {{ modelValue }}
    </a>
    <ul class="dropdown-menu" aria-labelledby="select-box">
      <li v-for="item in items" :key="item" @click="handleChange(item)"><a class="dropdown-item text-primary" href="#">{{ item }}</a></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  defineEmits
} from 'vue';
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  items: {
    type: Array as () => string[],
    required: true
  },
});

const emit = defineEmits(['update:modelValue']);

const handleChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>

<style scoped>
.u-select {
  display: flex;
  justify-content: start;
  border-radius: 0.5rem;
  padding: 0.5rem 3rem;
  font-size: 0.875rem;
  color: #FF7377;
  border: solid 1px #c9c9c9;
}
</style>
