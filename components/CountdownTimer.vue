<template>
  <div class="countdown-container">
    <span v-if="timeLeft.total > 0">
      <span v-if="timeLeft.days > 0">{{ timeLeft.days }} Day</span>{{ formatTwoDigits(timeLeft.hours) }}:{{ formatTwoDigits(timeLeft.minutes) }}:{{ formatTwoDigits(timeLeft.seconds) }}
    </span>
    <span v-else>
      Auction Ended!
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
});

const now = ref(Date.now());
let intervalId = null;

const targetTimestamp = computed(() => new Date(props.targetDate).getTime());

const timeLeft = computed(() => {
  const distance = targetTimestamp.value - now.value;

  if (distance < 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { total: distance, days, hours, minutes, seconds };
});

function formatTwoDigits(number) {
  return String(number).padStart(2, '0');
}

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = Date.now();
  }, 1000); // Update every second
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.countdown-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

</style>