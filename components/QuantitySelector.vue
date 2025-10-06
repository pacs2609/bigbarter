<template>
  <div class="quantity-selector" :class="{'justify-content-center': center}">
    <div class="quantity-selector__control">
      <button
        type="button"
        class="control-btn-left"
        @click="decrement"
        :disabled="currentQuantity <= 1"
        aria-label="Decrease quantity"
      >
        <Icon icon="ic:baseline-minus" width="20" height="20" />
      </button>
      <input
        :id="inputId"
        type="number"
        class="quantity-input"
        :min="min"
        :max="max"
        v-model.number="currentQuantity"
        @blur="validateInput"
        :style="{ width: width + 'px' }"
      />
      <button
        type="button"
        class="control-btn-right"
        @click="increment"
        :disabled="currentQuantity >= max"
        aria-label="Increase quantity"
      >
        <Icon icon="ic:baseline-plus" width="20" height="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { Icon } from '@iconify/vue';
// PROPS
const props = withDefaults(defineProps<{
  max: number;
  min?: number;
  width?:number;
  initialValue?: number;
  center?:boolean
}>(), {
  initialValue: 1,
  min: 1,
  width: 80
});

// EMITS
const emit = defineEmits<{
  (e: 'change', quantity: number): void;
}>();

// STATE
const currentQuantity = ref(props.initialValue);
const inputId = computed(() => `quantity-input-${crypto.randomUUID()}`);

// METHODS
const increment = () => {
  if (currentQuantity.value < props.max) {9
    currentQuantity.value++;
  }
};

const decrement = () => {
  if (currentQuantity.value > 1) {
    currentQuantity.value--;
  }
};

// Handle cases where user types a value directly
const validateInput = () => {
  if (currentQuantity.value > props.max) {
    currentQuantity.value = props.max;
  } else if (currentQuantity.value < 1 || !currentQuantity.value) {
    currentQuantity.value = 1;
  }
};

// WATCHER: Emit the change event whenever the quantity is updated
watch(currentQuantity, (newQuantity) => {
  emit('change', newQuantity);
});

// Watch for external changes to initialValue
watch(() => props.initialValue, (newVal) => {
    currentQuantity.value = newVal;
})
</script>

<style scoped>
.quantity-selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.quantity-selector__label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.quantity-selector__control {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: fit-content;
}

.control-btn-right {
  width: 40px;
  height: 44px;
  background-color: #DB4444;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border: solid 1px #c0c0c0;
  color: #FFFFFF;
  border-radius: 0px 5px 5px 0px;
  transition: background-color 0.2s;
}

.control-btn-left {
  width: 40px;
  height: 44px;
  background-color: #DB4444;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border: solid 1px #c0c0c0;
  color: #FFFFFF;
  border-radius: 5px 0px 0px 5px;
  transition: background-color 0.2s;
}

.control-btn-left:disabled {
  color: #aaa;
  background-color: #FFFFFF;
  border: solid 1px #c0c0c0;
  cursor: not-allowed;
}
.control-btn-right:disabled {
  color: #aaa;
  background-color: #FFFFFF;
  border: solid 1px ;
  cursor: not-allowed;
}


.quantity-input {
  width: 80px;
  height: 44px;
  text-align: center;
  color: #000;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  border: solid 1px #c0c0c0;
  background-color: #FFF;
  border-left: 0;
  border-right: 0;
  -moz-appearance: textfield; /* Firefox */
}

/* Hide arrows from number input in Chrome, Safari, Edge, Opera */
.quantity-input::-webkit-outer-spin-button,
.quantity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>