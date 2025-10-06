<template>
  <div class="product-gallery">
    <swiper :modules="[Navigation, Thumbs]" :thumbs="{ swiper: thumbsSwiper }" :space-between="10" :navigation="true"
      class="main-swiper">
      <swiper-slide v-for="image in props.image" :key="image.src">
        <img :src="image.src" alt="Main Image" />
      </swiper-slide>
    </swiper>
    <swiper @swiper="setThumbsSwiper" :modules="[FreeMode, Thumbs]" :direction="'vertical'" :space-between="10"
      :slides-per-view="4" :watch-slides-progress="true" :free-mode="true" class="thumbnail-swiper">
      <swiper-slide v-for="(image, n) in props.image" :key="image.src">
        <img :src="image.src" alt="Thumbnail" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import Swiper Vue components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper modules. Use correct names for Swiper 10+
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

const props = defineProps({
  image: {
    type: Array,
    default: () => []
  }
})
// console.log(props.image)
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// A ref to hold the thumbnail swiper instance
const thumbsSwiper = ref(null);

// A function to set the thumbnail swiper instance
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<style scoped>
.product-gallery {
  display: flex;
  flex-direction: row-reverse;
  /* Puts thumbnails on the left */
  gap: 1rem;
  height: 600px;
  /* Adjust height as needed */
}

/* Thumbnail Swiper Styles */
.thumbnail-swiper {
  width: 120px;
  height: 100%;
}

.thumbnail-swiper .swiper-slide {
  height: auto !important;
  opacity: 0.5;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.thumbnail-swiper .swiper-slide-thumb-active {
  opacity: 1;
  border-color: #DB4444;
  border: solid 1px #DB4444;
  /* Active thumbnail border color */
}

/* Main Swiper Styles */
.main-swiper {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.main-swiper .swiper-slide,
.thumbnail-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.main-swiper img,
.thumbnail-swiper img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

/* Style navigation buttons for the main swiper */
.main-swiper :deep(.swiper-button-next),
.main-swiper :deep(.swiper-button-prev) {
  color: #fff;
}
</style>