<template>
  <div class="dropdown">
    <a class="btn-lang dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
      aria-expanded="false">
      <img v-if="src" :src="src" :alt="alt" class="object-cover avatar rounded-full" @error="handleImageError" />
      <span v-else class="font-medium text-gray-600 dark:text-gray-300">{{ initials }}</span>
    </a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item text-primary" href="#">Profile</a></li>
      <li><a class="dropdown-item text-primary" @click="logout()">Logout</a></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const logout = async () => {
  await authStore.logout()
}

const props = defineProps({
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 48,
  },
})
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const initials = computed(() => {
  if (!props.alt) return ''
  const names = props.alt.split(' ')
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase()
  }
  return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase()
})
</script>
<style scoped>
.avatar {
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  object-position: center !important;
}
.dropdown-menu>li>a {
    display: block;
    /* padding: 3px 20px; */
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}

.dropdown-menu>li>a:hover {
    border-radius: 0.5rem;
    background-color: #ff737817;
}

.dropdown-menu {
    min-width: 1rem !important;
    text-align: center;
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: 0 !important;
    border-right: 0 !important;
    border-bottom: 0;
    border-left: 0 !important;
}

.btn-lang {
    background: transparent;
    color: #FFF;
}
</style>