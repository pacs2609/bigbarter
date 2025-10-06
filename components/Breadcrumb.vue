<template>
    <nav class="d-flex justify-content-end" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item fw-600 active" aria-current="page">Home</li>
        <li class="breadcrumb-item fw-600" v-for="item in props.breadcrumb" :key="item.name"><a :href="item.link">{{item.name}}</a></li>
      </ol>
    </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  breadcrumb: Array,
  default: () => []
})
</script>

<style scoped>
.breadcrumb {
  background-color: transparent;
}
</style>