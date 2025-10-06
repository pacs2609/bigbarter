<script setup lang="ts">
const containerRef = ref(null)

const sponsor = [{
        id: 'bmw',
        pic: '/img/img-6391578456186.jpg'
    },
    {
        id: 'redbox',
        pic: '/img/img-0081534218028.jpg'
    },
    {
        id: 'domin',
        pic: '/img/img-5501562232579.jpg'
    }
]

const swiper = useSwiper(containerRef)

</script>

<template>
<ClientOnly>
  <swiper-container ref="containerRef">
    <swiper-slide v-for="item in 3" class="d-flex justify-content-center">
      <div v-for="item in sponsor" :key="item.id" class="d-flex justify-content-center gap-2">
        <img class="img-responsive mx-auto d-block" style="width: 150px;height: 150px;" :src="item.pic" :alt="item.id">
      </div>
    </swiper-slide>
  </swiper-container>
</ClientOnly>
</template>
